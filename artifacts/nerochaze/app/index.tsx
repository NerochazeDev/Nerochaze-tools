import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState, useMemo } from "react";
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
import { AI_PROMPTS, AUTOMATION_SCRIPTS } from "@/constants/data";

function TagPill({ label }: { label: string }) {
  const colors = useColors();
  return (
    <View style={[styles.tag, { backgroundColor: colors.primary + "22", borderColor: colors.primary + "44" }]}>
      <Text style={[styles.tagText, { color: colors.primary }]}>{label}</Text>
    </View>
  );
}

function PromptCard({ item, onPress }: { item: (typeof AI_PROMPTS)[0]; onPress: () => void }) {
  const colors = useColors();
  const scale = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, { toValue: 0.97, useNativeDriver: true, speed: 50 }).start();
  };
  const handlePressOut = () => {
    Animated.spring(scale, { toValue: 1, useNativeDriver: true, speed: 50 }).start();
  };

  return (
    <Pressable onPress={onPress} onPressIn={handlePressIn} onPressOut={handlePressOut}>
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
        <View style={styles.cardHeader}>
          <View style={[styles.categoryBadge, { backgroundColor: colors.primary + "1A" }]}>
            <Text style={[styles.categoryText, { color: colors.primary }]}>{item.category}</Text>
          </View>
          <Feather name="arrow-right" size={16} color={colors.mutedForeground} />
        </View>
        <Text style={[styles.cardTitle, { color: colors.foreground }]}>{item.title}</Text>
        <Text style={[styles.cardDesc, { color: colors.mutedForeground }]} numberOfLines={2}>
          {item.description}
        </Text>
        <View style={styles.tagRow}>
          {item.tags.slice(0, 3).map((t) => (
            <TagPill key={t} label={t} />
          ))}
        </View>
        <View style={[styles.matrixPreview, { borderTopColor: colors.border }]}>
          <Feather name="grid" size={12} color={colors.mutedForeground} />
          <Text style={[styles.matrixCount, { color: colors.mutedForeground }]}>
            {item.matrix.length} matrix rows
          </Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}

function ScriptCard({ item, onPress }: { item: (typeof AUTOMATION_SCRIPTS)[0]; onPress: () => void }) {
  const colors = useColors();
  const scale = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, { toValue: 0.97, useNativeDriver: true, speed: 50 }).start();
  };
  const handlePressOut = () => {
    Animated.spring(scale, { toValue: 1, useNativeDriver: true, speed: 50 }).start();
  };

  const platformIcon: Record<string, keyof typeof Feather.glyphMap> = {
    Discord: "message-circle",
    WhatsApp: "phone",
    Telegram: "send",
    General: "code",
  };

  return (
    <Pressable onPress={onPress} onPressIn={handlePressIn} onPressOut={handlePressOut}>
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
        <View style={styles.cardHeader}>
          <View style={styles.scriptMeta}>
            <View style={[styles.langBadge, { backgroundColor: "#1A1A2E", borderColor: colors.primary + "44" }]}>
              <Text style={[styles.langText, { color: colors.primary }]}>{item.language}</Text>
            </View>
            <Text style={[styles.platformLabel, { color: colors.mutedForeground }]}>
              {item.platform}
            </Text>
          </View>
          <Feather
            name={platformIcon[item.platform] ?? "code"}
            size={18}
            color={colors.primary}
          />
        </View>
        <Text style={[styles.cardTitle, { color: colors.foreground }]}>{item.title}</Text>
        <Text style={[styles.cardDesc, { color: colors.mutedForeground }]} numberOfLines={2}>
          {item.description}
        </Text>
        <View style={[styles.featureList, { borderTopColor: colors.border }]}>
          {item.features.slice(0, 3).map((f) => (
            <View key={f} style={styles.featureRow}>
              <View style={[styles.featureDot, { backgroundColor: colors.primary }]} />
              <Text style={[styles.featureText, { color: colors.secondaryForeground }]}>{f}</Text>
            </View>
          ))}
        </View>
      </Animated.View>
    </Pressable>
  );
}

function SectionHeader({ title, count }: { title: string; count: number }) {
  const colors = useColors();
  return (
    <View style={styles.sectionHeader}>
      <Text style={[styles.sectionTitle, { color: colors.foreground }]}>{title}</Text>
      <View style={[styles.countBadge, { backgroundColor: colors.muted }]}>
        <Text style={[styles.countText, { color: colors.mutedForeground }]}>{count}</Text>
      </View>
    </View>
  );
}

export default function HomeScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "prompts" | "scripts">("all");

  const filteredPrompts = useMemo(() => {
    if (activeFilter === "scripts") return [];
    if (!search) return AI_PROMPTS;
    const q = search.toLowerCase();
    return AI_PROMPTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [search, activeFilter]);

  const filteredScripts = useMemo(() => {
    if (activeFilter === "prompts") return [];
    if (!search) return AUTOMATION_SCRIPTS;
    const q = search.toLowerCase();
    return AUTOMATION_SCRIPTS.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.platform.toLowerCase().includes(q)
    );
  }, [search, activeFilter]);

  const topPad = Platform.OS === "web" ? 67 : insets.top;

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      <ScrollView
        contentContainerStyle={[styles.scroll, { paddingTop: topPad + 8, paddingBottom: insets.bottom + 34 }]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Hero */}
        <View style={styles.hero}>
          <View style={[styles.logoBadge, { borderColor: colors.primary + "55", backgroundColor: colors.primary + "11" }]}>
            <Feather name="cpu" size={20} color={colors.primary} />
          </View>
          <Text style={[styles.brandName, { color: colors.foreground }]}>
            Nerochaze{"\n"}Creative Labs
          </Text>
          <Text style={[styles.brandTagline, { color: colors.mutedForeground }]}>
            Advanced AI prompts & automation scripts for builders, creators, and operators.
          </Text>
        </View>

        {/* Stats row */}
        <View style={[styles.statsRow, { borderColor: colors.border, backgroundColor: colors.card }]}>
          {[
            { label: "Prompts", value: `${AI_PROMPTS.length}` },
            { label: "Scripts", value: `${AUTOMATION_SCRIPTS.length}` },
            { label: "Languages", value: "Python" },
          ].map((stat, i) => (
            <React.Fragment key={stat.label}>
              {i > 0 && <View style={[styles.statDivider, { backgroundColor: colors.border }]} />}
              <View style={styles.stat}>
                <Text style={[styles.statValue, { color: colors.primary }]}>{stat.value}</Text>
                <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>{stat.label}</Text>
              </View>
            </React.Fragment>
          ))}
        </View>

        {/* Search */}
        <View style={[styles.searchContainer, { backgroundColor: colors.input, borderColor: colors.border }]}>
          <Feather name="search" size={16} color={colors.mutedForeground} />
          <TextInput
            style={[styles.searchInput, { color: colors.foreground }]}
            placeholder="Search prompts, scripts, platforms..."
            placeholderTextColor={colors.mutedForeground}
            value={search}
            onChangeText={setSearch}
            returnKeyType="search"
          />
          {search.length > 0 && (
            <Pressable onPress={() => setSearch("")}>
              <Feather name="x" size={16} color={colors.mutedForeground} />
            </Pressable>
          )}
        </View>

        {/* Filter pills */}
        <View style={styles.filterRow}>
          {(["all", "prompts", "scripts"] as const).map((f) => (
            <Pressable
              key={f}
              onPress={() => setActiveFilter(f)}
              style={[
                styles.filterPill,
                {
                  backgroundColor: activeFilter === f ? colors.primary : colors.card,
                  borderColor: activeFilter === f ? colors.primary : colors.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.filterText,
                  { color: activeFilter === f ? "#FFFFFF" : colors.mutedForeground },
                ]}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* AI Prompts Section */}
        {filteredPrompts.length > 0 && (
          <>
            <SectionHeader title="AI Prompt Matrix" count={filteredPrompts.length} />
            <View style={styles.grid}>
              {filteredPrompts.map((p) => (
                <PromptCard
                  key={p.id}
                  item={p}
                  onPress={() => router.push(`/prompt/${p.id}` as any)}
                />
              ))}
            </View>
          </>
        )}

        {/* Automation Scripts Section */}
        {filteredScripts.length > 0 && (
          <>
            <SectionHeader title="Automation Scripts" count={filteredScripts.length} />
            <View style={styles.grid}>
              {filteredScripts.map((s) => (
                <ScriptCard
                  key={s.id}
                  item={s}
                  onPress={() => router.push(`/script/${s.id}` as any)}
                />
              ))}
            </View>
          </>
        )}

        {/* Empty state */}
        {filteredPrompts.length === 0 && filteredScripts.length === 0 && (
          <View style={styles.emptyState}>
            <Feather name="search" size={36} color={colors.mutedForeground} />
            <Text style={[styles.emptyTitle, { color: colors.foreground }]}>No results</Text>
            <Text style={[styles.emptyDesc, { color: colors.mutedForeground }]}>
              Try a different search term
            </Text>
          </View>
        )}

        {/* Footer */}
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
    width: 44,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  brandName: {
    fontSize: 32,
    fontFamily: "Inter_700Bold",
    lineHeight: 40,
    letterSpacing: -0.5,
    marginBottom: 12,
  },
  brandTagline: {
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    lineHeight: 22,
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
  statLabel: { fontSize: 11, fontFamily: "Inter_500Medium", marginTop: 2 },
  statDivider: { width: 1, height: "100%" },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 10,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    padding: 0,
  },
  filterRow: { flexDirection: "row", gap: 8, marginBottom: 28 },
  filterPill: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 1,
  },
  filterText: { fontSize: 13, fontFamily: "Inter_500Medium" },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 14,
  },
  sectionTitle: { fontSize: 17, fontFamily: "Inter_600SemiBold" },
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
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  categoryBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  categoryText: { fontSize: 11, fontFamily: "Inter_600SemiBold" },
  cardTitle: { fontSize: 16, fontFamily: "Inter_600SemiBold", marginBottom: 6 },
  cardDesc: { fontSize: 13, fontFamily: "Inter_400Regular", lineHeight: 19, marginBottom: 12 },
  tagRow: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginBottom: 12 },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    borderWidth: 1,
  },
  tagText: { fontSize: 11, fontFamily: "Inter_500Medium" },
  matrixPreview: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingTop: 10,
    borderTopWidth: 1,
  },
  matrixCount: { fontSize: 12, fontFamily: "Inter_400Regular" },
  scriptMeta: { flexDirection: "row", alignItems: "center", gap: 8 },
  langBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    borderWidth: 1,
  },
  langText: { fontSize: 11, fontFamily: "Inter_600SemiBold" },
  platformLabel: { fontSize: 12, fontFamily: "Inter_400Regular" },
  featureList: { paddingTop: 10, borderTopWidth: 1, gap: 6 },
  featureRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  featureDot: { width: 4, height: 4, borderRadius: 2 },
  featureText: { fontSize: 12, fontFamily: "Inter_400Regular" },
  emptyState: { alignItems: "center", paddingVertical: 60, gap: 10 },
  emptyTitle: { fontSize: 18, fontFamily: "Inter_600SemiBold" },
  emptyDesc: { fontSize: 14, fontFamily: "Inter_400Regular" },
  footer: {
    borderTopWidth: 1,
    paddingTop: 24,
    paddingBottom: 8,
    alignItems: "center",
  },
  footerText: { fontSize: 12, fontFamily: "Inter_400Regular" },
});
