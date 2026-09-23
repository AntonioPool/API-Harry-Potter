import { Platform, StyleSheet } from "react-native";
import { colors } from "./colors";
import { fonts, radius, spacing, typography } from "./spacing";

export const characterDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[0],
  },
  loadingText: {
    fontFamily: fonts.body,
    fontSize: typography.body.fontSize,
    color: colors.neutral[700],
    textAlign: "center" as const,
    marginTop: spacing.xxl,
  },
  imageSection: {
    width: "100%",
    height: 360,
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(10,10,10,0.4)",
  },
  backButton: {
    position: "absolute",
    top: Platform.OS === "web" ? spacing.lg : spacing.xxxl,
    left: spacing.lg,
    width: 40,
    height: 40,
    borderRadius: radius.full,
    backgroundColor: "rgba(10,10,10,0.6)",
    alignItems: "center",
    justifyContent: "center",
  },
  infoSection: {
    marginTop: -spacing.xl,
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xxxl,
    backgroundColor: colors.neutral[0],
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    flex: 1,
  },
  name: {
    fontFamily: fonts.display,
    fontSize: typography.h2.fontSize,
    color: colors.neutral[1000],
    marginTop: spacing.md,
  },
  nickname: {
    fontFamily: fonts.body,
    fontSize: typography.body.fontSize,
    color: colors.gold[400],
    marginTop: spacing.xs,
  },
  divider: {
    height: 1,
    backgroundColor: colors.neutral[300],
    marginVertical: spacing.lg,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  detailIcon: {
    width: 40,
    height: 40,
    borderRadius: radius.md,
    backgroundColor: colors.neutral[100],
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.neutral[300],
  },
  detailTextContainer: {
    marginLeft: spacing.md,
    flex: 1,
  },
  detailLabel: {
    fontFamily: fonts.body,
    fontSize: typography.caption.fontSize,
    color: colors.neutral[600],
  },
  detailValue: {
    fontFamily: fonts.bodyBold,
    fontSize: typography.bodySmall.fontSize,
    color: colors.neutral[900],
    marginTop: 2,
  },
  childrenContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  childTag: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
    backgroundColor: colors.neutral[100],
    borderWidth: 1,
    borderColor: colors.neutral[300],
  },
  childTagText: {
    fontFamily: fonts.body,
    fontSize: typography.caption.fontSize,
    color: colors.neutral[800],
  },
});