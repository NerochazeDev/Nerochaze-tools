import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState, useMemo, useRef } from "react";
import {
  Animated,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";
import { CONTENT, ALL_TAGS, type ContentItem } from "@/constants/data";

const CATEGORY_ICONS: Record<string, keyof typeof Feather.glyphMap> = {
  "AI Prompt Matrices": "cpu",
  "Automation Bot Scripts": "terminal",
};

function TagChip({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  const colors = useColors();
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.tagChip,
        {
          backgroundColor: active ? colors.primary : colors.card,
          borderColor: active ? colors.primary : colors.border,
        },
      ]}
    >
      <Text
        style={[
          styles.tagChipText,
          { color: active ? "#fff" : colors.mutedForeground },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

function ContentCard({
  item,
  onPress,
}: {
  item: ContentItem;
  onPress: () => void;
}) {
  const colors = useColors();
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () =>
    Animated.spring(scale, { toValue: 0.97, useNativeDriver: true, speed: 50 }).start();
  const handlePressOut = () =>
    Animated.spring(scale, { toValue: 1, useNativeDriver: true, speed: 50 }).start();

  const isPrompt = item.type === "prompt";
  const accentColor = isPrompt ? colors.primary : "#00C2A8";

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View
        style={[
          styles.card,
          {
            backgroundColor: colors.card,
            borderColor: colors.border,
            transform: [{ scale }],
          },
        ]}
      >
        {/* Card top row */}
        <View style={styles.cardTop}>
          <View
            style={[
              styles.cardIconWrap,
              { backgroundColor: accentColor + "18", borderColor: accentColor + "40" },
            ]}
          >
            <Feather
              name={(item.icon as keyof typeof Feather.glyphMap) ?? "file"}
              size={18}
              color={accentColor}
            />
          </View>
          <View style={styles.cardTopRight}>
            <View
              style={[
                styles.typeBadge,
                { backgroundColor: accentColor + "18" },
              ]}
            >
              <Text style={[styles.typeBadgeText, { color: accentColor }]}>
                {isPrompt ? "Prompt Matrix" : "Bot Script"}
              </Text>
            </View>
            <Feather name="arrow-right" size={15} color={colors.mutedForeground} />
          </View>
        </View>

        {/* Title + description */}
        <Text style={[styles.cardTitle, { color: colors.foreground }]}>
          {item.title}
        </Text>
        <Text
          style={[styles.cardDesc, { color: colors.mutedForeground }]}
          numberOfLines={2}
        >
          {item.description}
        </Text>

        {/* Tags */}
        <View style={styles.tagRow}>
          {item.tags.slice(0, 4).map((t) => (
            <View
              key={t}
              style={[
                styles.inlineTag,
                { backgroundColor: colors.muted, borderColor: colors.border },
              ]}
            >
              <Text style={[styles.inlineTagText, { color: colors.mutedForeground }]}>
                {t}
              </Text>
            </View>
          ))}
        </View>
      </Animated.View>
    </Pressable>
  );
}

function SectionHeader({
  title,
  count,
  icon,
}: {
  title: string;
  count: number;
  icon: keyof typeof Feather.glyphMap;
}) {
  const colors = useColors();
  return (
    <View style={styles.sectionHeader}>
      <Feather name={icon} size={15} color={colors.primary} />
      <Text style={[styles.sectionTitle, { color: colors.foreground }]}>{title}</Text>
      <View style={[styles.countBadge, { backgroundColor: colors.muted }]}>
        <Text style={[styles.countText, { color: colors.mutedForeground }]}>
          {count}
        </Text>
      </View>
    </View>
  );
}

export default function HomeScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [activeType, setActiveType] = useState<"all" | "prompt" | "script">("all");

  const topPad = Platform.OS === "web" ? 67 : insets.top;

  const filtered = useMemo(() => {
    let items = CONTENT;
    if (activeType !== "all") items = items.filter((c) => c.type === activeType);
    if (activeTag) items = items.filter((c) => c.tags.includes(activeTag));
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q)) ||
          c.category.toLowerCase().includes(q)
      );
    }
    return items;
  }, [search, activeTag, activeType]);

  const promptItems = filtered.filter((c) => c.type === "prompt");
  const scriptItems = filtered.filter((c) => c.type === "script");

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          { paddingTop: topPad + 8, paddingBottom: insets.bottom + 34 },
        ]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* ── Hero ── */}
        <View style={styles.hero}>
          <View
            style={[
              styles.logoBadge,
              {
                borderColor: colors.primary + "55",
                backgroundColor: colors.primary + "11",
              },
            ]}
          >
            <Feather name="cpu" size={22} color={colors.primary} />
          </View>
          <Text style={[styles.brandName, { color: colors.foreground }]}>
            Nerochaze{"\n"}Creative Labs
          </Text>
          <Text style={[styles.brandTagline, { color: colors.mutedForeground }]}>
            Advanced AI prompt matrices & automation bot scripts for builders and creators.
          </Text>
        </View>

        {/* ── Stats ── */}
        <View
          style={[
            styles.statsRow,
            { borderColor: colors.border, backgroundColor: colors.card },
          ]}
        >
          {[
            { label: "Prompt Matrices", value: `${CONTENT.filter((c) => c.type === "prompt").length}` },
            { label: "Bot Scripts", value: `${CONTENT.filter((c) => c.type === "script").length}` },
            { label: "Total Releases", value: `${CONTENT.length}` },
          ].map((s, i) => (
            <React.Fragment key={s.label}>
              {i > 0 && (
                <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
              )}
              <View style={styles.stat}>
                <Text style={[styles.statValue, { color: colors.primary }]}>{s.value}</Text>
                <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>
                  {s.label}
                </Text>
              </View>
            </React.Fragment>
          ))}
        </View>

        {/* ── Search ── */}
        <View
          style={[
            styles.searchWrap,
            { backgroundColor: colors.input, borderColor: colors.border },
          ]}
        >
          <Feather name="search" size={16} color={colors.mutedForeground} />
          <TextInput
            style={[styles.searchInput, { color: colors.foreground }]}
            placeholder="Search by title, tag, or platform..."
            placeholderTextColor={colors.mutedForeground}
            value={search}
            onChangeText={setSearch}
            returnKeyType="search"
          />
          {search.length > 0 && (
            <Pressable onPress={() => setSearch("")} hitSlop={8}>
              <Feather name="x" size={15} color={colors.mutedForeground} />
            </Pressable>
          )}
        </View>

        {/* ── Type filter ── */}
        <View style={styles.filterRow}>
          {(["all", "prompt", "script"] as const).map((f) => (
            <Pressable
              key={f}
              onPress={() => setActiveType(f)}
              style={[
                styles.filterPill,
                {
                  backgroundColor:
                    activeType === f ? colors.primary : colors.card,
                  borderColor:
                    activeType === f ? colors.primary : colors.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.filterText,
                  {
                    color:
                      activeType === f ? "#fff" : colors.mutedForeground,
                  },
                ]}
              >
                {f === "all"
                  ? "All"
                  : f === "prompt"
                  ? "Prompt Matrices"
                  : "Bot Scripts"}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* ── Tag filter scroll ── */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tagScroll}
          style={{ marginBottom: 28 }}
        >
          <TagChip
            label="All Tags"
            active={activeTag === null}
            onPress={() => setActiveTag(null)}
          />
          {ALL_TAGS.map((t) => (
            <TagChip
              key={t}
              label={t}
              active={activeTag === t}
              onPress={() => setActiveTag(activeTag === t ? null : t)}
            />
          ))}
        </ScrollView>

        {/* ── AI Prompt Matrices section ── */}
        {promptItems.length > 0 && (
          <>
            <SectionHeader
              title="AI Prompt Matrices"
              count={promptItems.length}
              icon="cpu"
            />
            <View style={styles.grid}>
              {promptItems.map((item) => (
                <ContentCard
                  key={item.id}
                  item={item}
                  onPress={() => router.push(`/content/${item.id}` as any)}
                />
              ))}
            </View>
          </>
        )}

        {/* ── Automation Bot Scripts section ── */}
        {scriptItems.length > 0 && (
          <>
            <SectionHeader
              title="Automation Bot Scripts"
              count={scriptItems.length}
              icon="terminal"
            />
            <View style={styles.grid}>
              {scriptItems.map((item) => (
                <ContentCard
                  key={item.id}
                  item={item}
                  onPress={() => router.push(`/content/${item.id}` as any)}
                />
              ))}
            </View>
          </>
        )}

        {/* ── Empty state ── */}
        {filtered.length === 0 && (
          <View style={styles.emptyState}>
            <Feather name="search" size={36} color={colors.mutedForeground} />
            <Text style={[styles.emptyTitle, { color: colors.foreground }]}>
              No results
            </Text>
            <Text style={[styles.emptyDesc, { color: colors.mutedForeground }]}>
              Try a different search or clear the tag filter
            </Text>
          </View>
        )}

        {/* ── Footer ── */}
        <View style={[styles.footer, { borderTopColor: colors.border }]}>
          <Text style={[styles.footerText, { color: colors.mutedForeground }]}>
            Nerochaze Creative Labs © 2024
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  scroll: { paddingHorizontal: 20 },
  hero: { marginBottom: 24, paddingTop: 8 },
  logoBadge: {
    width: 48,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  brandName: {
    fontSize: 32,
    fontFamily: "Inter_700Bold",
    lineHeight: 40,
    letterSpacing: -0.5,
    marginBottom: 12,
  },
  brandTagline: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    lineHeight: 21,
  },
  statsRow: {
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
    paddingVertical: 14,
    overflow: "hidden",
  },
  stat: { flex: 1, alignItems: "center" },
  statValue: { fontSize: 18, fontFamily: "Inter_700Bold" },
  statLabel: { fontSize: 10, fontFamily: "Inter_500Medium", marginTop: 2, textAlign: "center" },
  statDivider: { width: 1 },
  searchWrap: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 10,
    marginBottom: 14,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    padding: 0,
  },
  filterRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 14,
    flexWrap: "wrap",
  },
  filterPill: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 1,
  },
  filterText: { fontSize: 12, fontFamily: "Inter_500Medium" },
  tagScroll: { gap: 8, paddingRight: 4 },
  tagChip: {
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
  },
  tagChipText: { fontSize: 12, fontFamily: "Inter_500Medium" },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 14,
  },
  sectionTitle: { fontSize: 16, fontFamily: "Inter_600SemiBold", flex: 1 },
  countBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
  },
  countText: { fontSize: 12, fontFamily: "Inter_500Medium" },
  grid: { gap: 12, marginBottom: 32 },
  card: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 16,
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  cardIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTopRight: { flexDirection: "row", alignItems: "center", gap: 8 },
  typeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  typeBadgeText: { fontSize: 11, fontFamily: "Inter_600SemiBold" },
  cardTitle: {
    fontSize: 15,
    fontFamily: "Inter_600SemiBold",
    marginBottom: 6,
    lineHeight: 21,
  },
  cardDesc: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    lineHeight: 19,
    marginBottom: 12,
  },
  tagRow: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  inlineTag: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 4,
    borderWidth: 1,
  },
  inlineTagText: { fontSize: 11, fontFamily: "Inter_400Regular" },
  emptyState: { alignItems: "center", paddingVertical: 60, gap: 10 },
  emptyTitle: { fontSize: 18, fontFamily: "Inter_600SemiBold" },
  emptyDesc: { fontSize: 13, fontFamily: "Inter_400Regular", textAlign: "center" },
  footer: {
    borderTopWidth: 1,
    paddingTop: 24,
    paddingBottom: 8,
    alignItems: "center",
  },
  footerText: { fontSize: 12, fontFamily: "Inter_400Regular" },
});
