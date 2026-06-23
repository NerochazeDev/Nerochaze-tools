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

import { AUTOMATION_SCRIPTS } from "@/constants/data";
import { useColors } from "@/hooks/useColors";

function FeatureItem({ text }: { text: string }) {
  const colors = useColors();
  return (
    <View style={styles.featureRow}>
      <View style={[styles.featureIcon, { backgroundColor: colors.primary + "22", borderColor: colors.primary + "44" }]}>
        <Feather name="check" size={11} color={colors.primary} />
      </View>
      <Text style={[styles.featureText, { color: colors.secondaryForeground }]}>{text}</Text>
    </View>
  );
}

function CodeBlock({ code, language }: { code: string; language: string }) {
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
    <View style={[styles.codeBlock, { backgroundColor: "#0A0A0A", borderColor: colors.border }]}>
      <View style={[styles.codeHeader, { borderBottomColor: colors.border }]}>
        <View style={styles.codeDots}>
          <View style={[styles.codeDot, { backgroundColor: "#FF5F57" }]} />
          <View style={[styles.codeDot, { backgroundColor: "#FFBD2E" }]} />
          <View style={[styles.codeDot, { backgroundColor: "#28C840" }]} />
        </View>
        <View style={[styles.langTag, { backgroundColor: colors.primary + "22", borderColor: colors.primary + "44" }]}>
          <Text style={[styles.langTagText, { color: colors.primary }]}>{language}</Text>
        </View>
        <Pressable onPress={handleCopy} style={styles.copyBtn} hitSlop={8}>
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
        <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
          <Text style={styles.codeText}>{code}</Text>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

export default function ScriptDetailScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const script = AUTOMATION_SCRIPTS.find((s) => s.id === id);

  const topPad = Platform.OS === "web" ? 67 : insets.top;

  if (!script) {
    return (
      <View style={[styles.root, { backgroundColor: colors.background, paddingTop: topPad + 16 }]}>
        <Text style={[styles.errorText, { color: colors.mutedForeground }]}>Script not found.</Text>
      </View>
    );
  }

  const platformColors: Record<string, string> = {
    Discord: "#5865F2",
    WhatsApp: "#25D366",
    Telegram: "#2AABEE",
    General: "#8C52FF",
  };
  const accentColor = platformColors[script.platform] ?? colors.primary;

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
          {script.platform} Script
        </Text>
        <View style={{ width: 32 }} />
      </View>

      <ScrollView
        contentContainerStyle={[styles.scroll, { paddingBottom: insets.bottom + 34 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero block */}
        <View style={[styles.heroCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={[styles.platformIconWrap, { backgroundColor: accentColor + "22", borderColor: accentColor + "44" }]}>
            <Feather
              name={
                script.platform === "Discord"
                  ? "message-circle"
                  : script.platform === "WhatsApp"
                  ? "phone"
                  : script.platform === "Telegram"
                  ? "send"
                  : "code"
              }
              size={24}
              color={accentColor}
            />
          </View>
          <View style={styles.heroMeta}>
            <View style={styles.heroMetaRow}>
              <View style={[styles.langBadge, { backgroundColor: colors.primary + "1A", borderColor: colors.primary + "44" }]}>
                <Text style={[styles.langBadgeText, { color: colors.primary }]}>{script.language}</Text>
              </View>
              <View style={[styles.platformBadge, { backgroundColor: accentColor + "1A" }]}>
                <Text style={[styles.platformBadgeText, { color: accentColor }]}>{script.platform}</Text>
              </View>
            </View>
            <Text style={[styles.scriptTitle, { color: colors.foreground }]}>{script.title}</Text>
            <Text style={[styles.scriptDesc, { color: colors.mutedForeground }]}>{script.description}</Text>
          </View>
        </View>

        {/* Features */}
        <View style={styles.section}>
          <View style={styles.sectionLabel}>
            <Feather name="zap" size={14} color={colors.primary} />
            <Text style={[styles.sectionTitle, { color: colors.foreground }]}>Features</Text>
          </View>
          <View style={[styles.featuresCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            {script.features.map((f) => (
              <FeatureItem key={f} text={f} />
            ))}
          </View>
        </View>

        {/* Usage instructions */}
        <View style={styles.section}>
          <View style={styles.sectionLabel}>
            <Feather name="info" size={14} color={colors.primary} />
            <Text style={[styles.sectionTitle, { color: colors.foreground }]}>Before You Run</Text>
          </View>
          <View style={[styles.infoCard, { backgroundColor: colors.primary + "0D", borderColor: colors.primary + "33" }]}>
            <Text style={[styles.infoText, { color: colors.foreground }]}>
              1. Install Python 3.9+ and required libraries{"\n"}
              2. Replace placeholder values (TOKEN, IDs) with your credentials{"\n"}
              3. Run with: <Text style={styles.inlineMono}>python script.py</Text>
            </Text>
          </View>
        </View>

        {/* Source code */}
        <View style={styles.section}>
          <View style={styles.sectionLabel}>
            <Feather name="code" size={14} color={colors.primary} />
            <Text style={[styles.sectionTitle, { color: colors.foreground }]}>Source Code</Text>
          </View>
          <CodeBlock code={script.code} language={script.language} />
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
  scroll: { paddingHorizontal: 20, paddingTop: 20 },
  heroCard: {
    flexDirection: "row",
    gap: 14,
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    marginBottom: 24,
    alignItems: "flex-start",
  },
  platformIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heroMeta: { flex: 1 },
  heroMetaRow: { flexDirection: "row", gap: 6, marginBottom: 8 },
  langBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 4, borderWidth: 1 },
  langBadgeText: { fontSize: 11, fontFamily: "Inter_600SemiBold" },
  platformBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 4 },
  platformBadgeText: { fontSize: 11, fontFamily: "Inter_600SemiBold" },
  scriptTitle: { fontSize: 20, fontFamily: "Inter_700Bold", marginBottom: 6 },
  scriptDesc: { fontSize: 13, fontFamily: "Inter_400Regular", lineHeight: 19 },
  section: { marginBottom: 24 },
  sectionLabel: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 10 },
  sectionTitle: { fontSize: 15, fontFamily: "Inter_600SemiBold" },
  featuresCard: { borderRadius: 10, borderWidth: 1, padding: 14, gap: 10 },
  featureRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  featureIcon: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  featureText: { fontSize: 13, fontFamily: "Inter_400Regular", flex: 1 },
  infoCard: { borderRadius: 10, borderWidth: 1, padding: 14 },
  infoText: { fontSize: 13, fontFamily: "Inter_400Regular", lineHeight: 22 },
  inlineMono: {
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    backgroundColor: "rgba(140,82,255,0.15)",
    fontSize: 12,
  },
  codeBlock: { borderRadius: 10, borderWidth: 1, overflow: "hidden", maxHeight: 420 },
  codeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  codeDots: { flexDirection: "row", gap: 6 },
  codeDot: { width: 10, height: 10, borderRadius: 5 },
  langTag: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4, borderWidth: 1 },
  langTagText: { fontSize: 11, fontFamily: "Inter_600SemiBold" },
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
