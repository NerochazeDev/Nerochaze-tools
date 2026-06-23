import { Feather } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import * as Haptics from "expo-haptics";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AI_PROMPTS } from "@/constants/data";
import { useColors } from "@/hooks/useColors";

function MatrixTable({ matrix }: { matrix: (typeof AI_PROMPTS)[0]["matrix"] }) {
  const colors = useColors();
  const cols = ["Hook", "Technique", "Example"];

  return (
    <View style={[styles.tableWrapper, { borderColor: colors.border }]}>
      {/* Header */}
      <View style={[styles.tableRow, styles.tableHeaderRow, { backgroundColor: colors.muted }]}>
        {cols.map((c) => (
          <Text key={c} style={[styles.tableHeaderCell, { color: colors.mutedForeground }]}>
            {c}
          </Text>
        ))}
      </View>
      {/* Body */}
      {matrix.map((row, i) => (
        <View
          key={i}
          style={[
            styles.tableRow,
            { borderTopColor: colors.border, borderTopWidth: 1 },
            i % 2 === 1 ? { backgroundColor: colors.secondary + "88" } : {},
          ]}
        >
          <Text style={[styles.tableCell, styles.tableCellBold, { color: colors.primary }]}>
            {row.hook}
          </Text>
          <Text style={[styles.tableCell, { color: colors.secondaryForeground }]}>
            {row.technique}
          </Text>
          <Text style={[styles.tableCell, styles.tableCellMono, { color: colors.foreground }]}>
            {row.example}
          </Text>
        </View>
      ))}
    </View>
  );
}

function CodeBlock({ code }: { code: string }) {
  const colors = useColors();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await Clipboard.setStringAsync(code);
    if (Platform.OS !== "web") {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <View style={[styles.codeBlock, { backgroundColor: "#0D0D0D", borderColor: colors.border }]}>
      <View style={styles.codeHeader}>
        <View style={styles.codeDots}>
          <View style={[styles.codeDot, { backgroundColor: "#FF5F57" }]} />
          <View style={[styles.codeDot, { backgroundColor: "#FFBD2E" }]} />
          <View style={[styles.codeDot, { backgroundColor: "#28C840" }]} />
        </View>
        <Pressable onPress={handleCopy} style={styles.copyBtn}>
          <Feather
            name={copied ? "check" : "copy"}
            size={14}
            color={copied ? "#28C840" : colors.mutedForeground}
          />
          <Text style={[styles.copyText, { color: copied ? "#28C840" : colors.mutedForeground }]}>
            {copied ? "Copied!" : "Copy"}
          </Text>
        </Pressable>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Text style={styles.codeText}>{code}</Text>
      </ScrollView>
    </View>
  );
}

export default function PromptDetailScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const prompt = AI_PROMPTS.find((p) => p.id === id);

  const topPad = Platform.OS === "web" ? 67 : insets.top;

  if (!prompt) {
    return (
      <View style={[styles.root, { backgroundColor: colors.background, paddingTop: topPad + 16 }]}>
        <Text style={[styles.errorText, { color: colors.mutedForeground }]}>Prompt not found.</Text>
      </View>
    );
  }

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View
        style={[
          styles.header,
          {
            paddingTop: topPad + 8,
            borderBottomColor: colors.border,
            backgroundColor: colors.background,
          },
        ]}
      >
        <Pressable onPress={() => router.back()} style={styles.backBtn} hitSlop={12}>
          <Feather name="arrow-left" size={20} color={colors.foreground} />
        </Pressable>
        <Text style={[styles.headerTitle, { color: colors.foreground }]} numberOfLines={1}>
          {prompt.category}
        </Text>
        <View style={{ width: 32 }} />
      </View>

      <ScrollView
        contentContainerStyle={[styles.scroll, { paddingBottom: insets.bottom + 34 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Title block */}
        <View style={styles.titleBlock}>
          <View style={[styles.categoryBadge, { backgroundColor: colors.primary + "1A" }]}>
            <Text style={[styles.categoryText, { color: colors.primary }]}>{prompt.category}</Text>
          </View>
          <Text style={[styles.promptTitle, { color: colors.foreground }]}>{prompt.title}</Text>
          <Text style={[styles.promptDesc, { color: colors.mutedForeground }]}>{prompt.description}</Text>
          <View style={styles.tagRow}>
            {prompt.tags.map((t) => (
              <View key={t} style={[styles.tag, { backgroundColor: colors.muted, borderColor: colors.border }]}>
                <Text style={[styles.tagText, { color: colors.mutedForeground }]}>{t}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Divider */}
        <View style={[styles.divider, { backgroundColor: colors.border }]} />

        {/* Matrix section */}
        <View style={styles.section}>
          <View style={styles.sectionLabel}>
            <Feather name="grid" size={14} color={colors.primary} />
            <Text style={[styles.sectionTitle, { color: colors.foreground }]}>Prompt Matrix</Text>
          </View>
          <Text style={[styles.sectionDesc, { color: colors.mutedForeground }]}>
            Psychological triggers and techniques used in this prompt framework.
          </Text>
          <MatrixTable matrix={prompt.matrix} />
        </View>

        {/* Divider */}
        <View style={[styles.divider, { backgroundColor: colors.border }]} />

        {/* Full prompt */}
        <View style={styles.section}>
          <View style={styles.sectionLabel}>
            <Feather name="code" size={14} color={colors.primary} />
            <Text style={[styles.sectionTitle, { color: colors.foreground }]}>Full Prompt</Text>
          </View>
          <Text style={[styles.sectionDesc, { color: colors.mutedForeground }]}>
            Copy the prompt below and replace the bracketed placeholders with your specifics.
          </Text>
          <CodeBlock code={prompt.fullPrompt} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
  },
  backBtn: { width: 32, alignItems: "flex-start" },
  headerTitle: { fontSize: 15, fontFamily: "Inter_600SemiBold", flex: 1, textAlign: "center" },
  scroll: { paddingHorizontal: 20, paddingTop: 24 },
  titleBlock: { marginBottom: 28 },
  categoryBadge: { alignSelf: "flex-start", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, marginBottom: 12 },
  categoryText: { fontSize: 11, fontFamily: "Inter_600SemiBold" },
  promptTitle: { fontSize: 24, fontFamily: "Inter_700Bold", lineHeight: 30, marginBottom: 10 },
  promptDesc: { fontSize: 14, fontFamily: "Inter_400Regular", lineHeight: 21, marginBottom: 14 },
  tagRow: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  tag: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 4, borderWidth: 1 },
  tagText: { fontSize: 11, fontFamily: "Inter_500Medium" },
  divider: { height: 1, marginBottom: 24 },
  section: { marginBottom: 28 },
  sectionLabel: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 6 },
  sectionTitle: { fontSize: 15, fontFamily: "Inter_600SemiBold" },
  sectionDesc: { fontSize: 13, fontFamily: "Inter_400Regular", lineHeight: 19, marginBottom: 14 },
  tableWrapper: { borderRadius: 8, borderWidth: 1, overflow: "hidden" },
  tableRow: { flexDirection: "row" },
  tableHeaderRow: {},
  tableHeaderCell: {
    flex: 1,
    padding: 10,
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  tableCell: { flex: 1, padding: 10, fontSize: 12, fontFamily: "Inter_400Regular", lineHeight: 17 },
  tableCellBold: { fontFamily: "Inter_600SemiBold", fontSize: 12 },
  tableCellMono: { fontFamily: "Inter_400Regular", opacity: 0.85 },
  codeBlock: {
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
  },
  codeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#222222",
  },
  codeDots: { flexDirection: "row", gap: 6 },
  codeDot: { width: 10, height: 10, borderRadius: 5 },
  copyBtn: { flexDirection: "row", alignItems: "center", gap: 5 },
  copyText: { fontSize: 12, fontFamily: "Inter_500Medium" },
  codeText: {
    padding: 14,
    fontSize: 12,
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    color: "#E0E0E0",
    lineHeight: 19,
  },
  errorText: { fontSize: 16, fontFamily: "Inter_400Regular", textAlign: "center", marginTop: 60 },
});
