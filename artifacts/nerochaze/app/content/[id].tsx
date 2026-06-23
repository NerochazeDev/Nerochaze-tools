import { Feather } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import * as Haptics from "expo-haptics";
import { router, useLocalSearchParams } from "expo-router";
import * as WebBrowser from "expo-web-browser";
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

import { CONTENT } from "@/constants/data";
import { useColors } from "@/hooks/useColors";

// ──────────────────────────────────────────────
// Ad Banner Placeholder
// ──────────────────────────────────────────────
function AdBanner({ label }: { label: string }) {
  const colors = useColors();
  return (
    <View
      style={[
        styles.adBanner,
        { backgroundColor: colors.secondary, borderColor: colors.border },
      ]}
    >
      <Feather name="image" size={14} color={colors.mutedForeground} />
      <Text style={[styles.adBannerText, { color: colors.mutedForeground }]}>
        {label}
      </Text>
    </View>
  );
}

// ──────────────────────────────────────────────
// Code block (Section B)
// ──────────────────────────────────────────────
function SampleCodeBlock({ code, language }: { code: string; language: string }) {
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
      {/* Terminal chrome */}
      <View style={[styles.codeChrome, { borderBottomColor: colors.border }]}>
        <View style={styles.codeDots}>
          <View style={[styles.codeDot, { backgroundColor: "#FF5F57" }]} />
          <View style={[styles.codeDot, { backgroundColor: "#FFBD2E" }]} />
          <View style={[styles.codeDot, { backgroundColor: "#28C840" }]} />
        </View>
        <View style={[styles.langTag, { backgroundColor: colors.primary + "22", borderColor: colors.primary + "44" }]}>
          <Text style={[styles.langTagText, { color: colors.primary }]}>{language.toUpperCase()}</Text>
        </View>
        <Pressable onPress={handleCopy} style={styles.copyBtn} hitSlop={10}>
          <Feather
            name={copied ? "check" : "copy"}
            size={14}
            color={copied ? "#28C840" : colors.mutedForeground}
          />
          <Text style={[styles.copyBtnText, { color: copied ? "#28C840" : colors.mutedForeground }]}>
            {copied ? "Copied!" : "Copy"}
          </Text>
        </Pressable>
      </View>
      {/* Code scroll */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Text style={styles.codeText}>{code}</Text>
      </ScrollView>
    </View>
  );
}

// ──────────────────────────────────────────────
// Main detail screen
// ──────────────────────────────────────────────
export default function ContentDetailScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = CONTENT.find((c) => c.id === id);

  const topPad = Platform.OS === "web" ? 67 : insets.top;

  if (!item) {
    return (
      <View style={[styles.root, { backgroundColor: colors.background, paddingTop: topPad + 40 }]}>
        <Text style={[styles.missingText, { color: colors.mutedForeground }]}>
          Content not found.
        </Text>
      </View>
    );
  }

  const isPrompt = item.type === "prompt";
  const accentColor = isPrompt ? colors.primary : "#00C2A8";

  const handleDownload = async () => {
    if (Platform.OS !== "web") {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    await WebBrowser.openBrowserAsync(item.downloadUrl);
  };

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      {/* ── Header bar ── */}
      <View
        style={[
          styles.header,
          { paddingTop: topPad + 8, borderBottomColor: colors.border, backgroundColor: colors.background },
        ]}
      >
        <Pressable onPress={() => router.back()} style={styles.backBtn} hitSlop={12}>
          <Feather name="arrow-left" size={20} color={colors.foreground} />
        </Pressable>
        <Text style={[styles.headerTitle, { color: colors.foreground }]} numberOfLines={1}>
          {item.category}
        </Text>
        <View style={{ width: 32 }} />
      </View>

      <ScrollView
        contentContainerStyle={[styles.scroll, { paddingBottom: insets.bottom + 40 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Hero block ── */}
        <View style={styles.heroBlock}>
          <View
            style={[
              styles.heroIcon,
              { backgroundColor: accentColor + "18", borderColor: accentColor + "44" },
            ]}
          >
            <Feather
              name={(item.icon as keyof typeof Feather.glyphMap) ?? "file"}
              size={26}
              color={accentColor}
            />
          </View>
          <View
            style={[
              styles.typePill,
              { backgroundColor: accentColor + "18" },
            ]}
          >
            <Text style={[styles.typePillText, { color: accentColor }]}>
              {isPrompt ? "AI Prompt Matrix" : "Automation Bot Script"}
            </Text>
          </View>
          <Text style={[styles.heroTitle, { color: colors.foreground }]}>{item.title}</Text>
          <Text style={[styles.heroDesc, { color: colors.mutedForeground }]}>{item.description}</Text>
          {/* Tags */}
          <View style={styles.heroTags}>
            {item.tags.map((t) => (
              <View
                key={t}
                style={[
                  styles.heroTag,
                  { backgroundColor: colors.muted, borderColor: colors.border },
                ]}
              >
                <Text style={[styles.heroTagText, { color: colors.mutedForeground }]}>{t}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* ────────────────────────────────────
            SECTION A — Technical Guide
        ──────────────────────────────────── */}
        <View style={[styles.sectionCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={styles.sectionLabelRow}>
            <View style={[styles.sectionBadge, { backgroundColor: accentColor + "22" }]}>
              <Text style={[styles.sectionBadgeText, { color: accentColor }]}>Section A</Text>
            </View>
            <Text style={[styles.sectionHeading, { color: colors.foreground }]}>Technical Guide</Text>
          </View>

          {/* Top ad banner */}
          <AdBanner label="[ Adsterra Native Banner — 728×90 ]" />

          {/* Prerequisites */}
          <Text style={[styles.guideSubhead, { color: colors.foreground }]}>
            Prerequisites
          </Text>
          {item.prerequisites.map((p, i) => (
            <View key={i} style={styles.guideRow}>
              <View style={[styles.guideDot, { backgroundColor: accentColor }]} />
              <Text style={[styles.guideText, { color: colors.secondaryForeground }]}>{p}</Text>
            </View>
          ))}

          {/* Divider */}
          <View style={[styles.innerDivider, { backgroundColor: colors.border }]} />

          {/* Installation Steps */}
          <Text style={[styles.guideSubhead, { color: colors.foreground }]}>
            Installation & Setup
          </Text>
          {item.installationSteps.map((step, i) => (
            <View key={i} style={styles.stepRow}>
              <View style={[styles.stepNum, { backgroundColor: accentColor + "22", borderColor: accentColor + "44" }]}>
                <Text style={[styles.stepNumText, { color: accentColor }]}>{i + 1}</Text>
              </View>
              <Text style={[styles.stepText, { color: colors.secondaryForeground }]}>{step.replace(/^\d+\.\s/, "")}</Text>
            </View>
          ))}

          {/* Bottom ad banner */}
          <AdBanner label="[ Adsterra Native Banner — 728×90 ]" />
        </View>

        {/* ────────────────────────────────────
            SECTION B — On-Page Sample Box
        ──────────────────────────────────── */}
        <View style={[styles.sectionCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={styles.sectionLabelRow}>
            <View style={[styles.sectionBadge, { backgroundColor: "#F59E0B22" }]}>
              <Text style={[styles.sectionBadgeText, { color: "#F59E0B" }]}>Section B</Text>
            </View>
            <Text style={[styles.sectionHeading, { color: colors.foreground }]}>
              Free Sample
            </Text>
          </View>
          <Text style={[styles.sectionSubdesc, { color: colors.mutedForeground }]}>
            Fully usable sample — copy and deploy immediately, no sign-up required.
          </Text>
          <SampleCodeBlock code={item.sampleCode} language={item.sampleLanguage} />
        </View>

        {/* ────────────────────────────────────
            SECTION C — Premium Download Card
        ──────────────────────────────────── */}
        <View
          style={[
            styles.premiumCard,
            {
              backgroundColor: "#0D0D18",
              borderColor: colors.primary + "55",
            },
          ]}
        >
          {/* Glow accent bar */}
          <View style={[styles.premiumAccentBar, { backgroundColor: colors.primary }]} />

          <View style={styles.premiumContent}>
            <View style={styles.premiumTop}>
              <View
                style={[
                  styles.premiumIcon,
                  { backgroundColor: colors.primary + "22", borderColor: colors.primary + "44" },
                ]}
              >
                <Feather name="lock" size={18} color={colors.primary} />
              </View>
              <View style={styles.premiumLabels}>
                <View style={styles.sectionLabelRow}>
                  <View style={[styles.sectionBadge, { backgroundColor: colors.primary + "22" }]}>
                    <Text style={[styles.sectionBadgeText, { color: colors.primary }]}>Section C</Text>
                  </View>
                </View>
                <Text style={[styles.premiumTitle, { color: "#FFFFFF" }]}>
                  Premium Full Release
                </Text>
              </View>
            </View>

            <Text style={[styles.premiumDesc, { color: "#AAAAAA" }]}>
              {isPrompt
                ? "Unlock the complete prompt matrix — all variations, edge cases, and extended examples bundled in one download."
                : "Get the complete production-ready script with advanced features, error handling, config file, and full documentation."}
            </Text>

            {/* Feature bullets */}
            <View style={[styles.premiumFeatures, { borderColor: colors.primary + "33" }]}>
              {(
                isPrompt
                  ? [
                      "Complete prompt matrix (all variations)",
                      "Extended use-case examples",
                      "Platform-specific adaptations",
                      "Lifetime updates included",
                    ]
                  : [
                      "Full production-ready source code",
                      "Advanced error handling & logging",
                      "Config file for easy customization",
                      "Step-by-step deployment guide",
                    ]
              ).map((f) => (
                <View key={f} style={styles.premiumFeatureRow}>
                  <Feather name="check-circle" size={13} color={colors.primary} />
                  <Text style={[styles.premiumFeatureText, { color: "#CCCCCC" }]}>{f}</Text>
                </View>
              ))}
            </View>

            {/* Download button */}
            <Pressable
              onPress={handleDownload}
              style={({ pressed }) => [
                styles.downloadBtn,
                {
                  backgroundColor: colors.primary,
                  opacity: pressed ? 0.85 : 1,
                },
              ]}
            >
              <Text style={styles.downloadBtnText}>{item.downloadLabel}</Text>
              <Feather name="external-link" size={16} color="#FFFFFF" />
            </Pressable>

            <Text style={[styles.downloadHint, { color: "#555555" }]}>
              Redirects via secure link • Free with ShrinkMe
            </Text>
          </View>
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
  headerTitle: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
    flex: 1,
    textAlign: "center",
  },
  scroll: { paddingHorizontal: 16, paddingTop: 20 },
  missingText: { fontSize: 15, fontFamily: "Inter_400Regular", textAlign: "center" },

  // Hero
  heroBlock: { marginBottom: 20 },
  heroIcon: {
    width: 52,
    height: 52,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  typePill: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 10,
  },
  typePillText: { fontSize: 11, fontFamily: "Inter_600SemiBold" },
  heroTitle: { fontSize: 22, fontFamily: "Inter_700Bold", lineHeight: 28, marginBottom: 8 },
  heroDesc: { fontSize: 13, fontFamily: "Inter_400Regular", lineHeight: 20, marginBottom: 12 },
  heroTags: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  heroTag: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 4, borderWidth: 1 },
  heroTagText: { fontSize: 11, fontFamily: "Inter_400Regular" },

  // Section card
  sectionCard: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
  },
  sectionLabelRow: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 10 },
  sectionBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 4 },
  sectionBadgeText: { fontSize: 10, fontFamily: "Inter_700Bold", letterSpacing: 0.5 },
  sectionHeading: { fontSize: 16, fontFamily: "Inter_600SemiBold" },
  sectionSubdesc: { fontSize: 13, fontFamily: "Inter_400Regular", lineHeight: 19, marginBottom: 14 },

  // Ad banner
  adBanner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: "dashed",
    paddingVertical: 14,
    marginBottom: 18,
    marginTop: 4,
  },
  adBannerText: { fontSize: 11, fontFamily: "Inter_400Regular", opacity: 0.7 },

  // Guide content
  guideSubhead: { fontSize: 13, fontFamily: "Inter_600SemiBold", marginBottom: 10 },
  guideRow: { flexDirection: "row", alignItems: "flex-start", gap: 10, marginBottom: 8 },
  guideDot: { width: 5, height: 5, borderRadius: 3, marginTop: 6 },
  guideText: { fontSize: 13, fontFamily: "Inter_400Regular", lineHeight: 19, flex: 1 },
  innerDivider: { height: 1, marginVertical: 16 },
  stepRow: { flexDirection: "row", alignItems: "flex-start", gap: 10, marginBottom: 10 },
  stepNum: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  stepNumText: { fontSize: 10, fontFamily: "Inter_700Bold" },
  stepText: { fontSize: 13, fontFamily: "Inter_400Regular", lineHeight: 19, flex: 1 },

  // Code block
  codeBlock: { borderRadius: 8, borderWidth: 1, overflow: "hidden" },
  codeChrome: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    gap: 10,
  },
  codeDots: { flexDirection: "row", gap: 5 },
  codeDot: { width: 10, height: 10, borderRadius: 5 },
  langTag: {
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
  },
  langTagText: { fontSize: 10, fontFamily: "Inter_700Bold" },
  copyBtn: { flexDirection: "row", alignItems: "center", gap: 4 },
  copyBtnText: { fontSize: 12, fontFamily: "Inter_500Medium" },
  codeText: {
    padding: 14,
    fontSize: 12,
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    color: "#E0E0E0",
    lineHeight: 19,
  },

  // Premium card
  premiumCard: {
    borderRadius: 12,
    borderWidth: 1,
    overflow: "hidden",
    marginBottom: 8,
  },
  premiumAccentBar: { height: 3, width: "100%" },
  premiumContent: { padding: 18 },
  premiumTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 14,
  },
  premiumIcon: {
    width: 44,
    height: 44,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  premiumLabels: { flex: 1 },
  premiumTitle: { fontSize: 18, fontFamily: "Inter_700Bold", marginTop: 4 },
  premiumDesc: { fontSize: 13, fontFamily: "Inter_400Regular", lineHeight: 20, marginBottom: 16 },
  premiumFeatures: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 12,
    gap: 8,
    marginBottom: 20,
  },
  premiumFeatureRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  premiumFeatureText: { fontSize: 13, fontFamily: "Inter_400Regular", flex: 1 },
  downloadBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  downloadBtnText: {
    fontSize: 15,
    fontFamily: "Inter_700Bold",
    color: "#FFFFFF",
  },
  downloadHint: { fontSize: 11, fontFamily: "Inter_400Regular", textAlign: "center" },
});
