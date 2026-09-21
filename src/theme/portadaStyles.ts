import { StyleSheet, Dimensions } from "react-native";
import { colors } from "./colors";
import { spacing, radius, typography, fonts } from "./spacing";

const { height, width } = Dimensions.get("window");

export const portadaStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[0],
  },
  heroSection: {
    width: width,
    height: height,
    justifyContent: "flex-end",
    position: "relative",
  },
  heroImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(10, 10, 10, 0.55)",
  },
  heroContent: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xxxl,
    zIndex: 2,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    alignSelf: "flex-start",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
    backgroundColor: "rgba(250, 204, 21, 0.15)",
    borderWidth: 1,
    borderColor: "rgba(250, 204, 21, 0.3)",
    marginBottom: spacing.md,
  },
  badgeText: {
    fontFamily: fonts.body,
    fontSize: typography.caption.fontSize,
    color: colors.gold[300],
  },
  title: {
    fontFamily: fonts.display,
    fontSize: typography.h1.fontSize,
    lineHeight: typography.h1.lineHeight,
    color: colors.neutral[1000],
    letterSpacing: 1,
  },
  titleAccent: {
    fontFamily: fonts.display,
    fontSize: typography.hero.fontSize,
    lineHeight: typography.hero.lineHeight,
    color: colors.gold[400],
    letterSpacing: 1,
    marginBottom: spacing.md,
  },
  subtitle: {
    fontFamily: fonts.body,
    fontSize: typography.bodySmall.fontSize,
    lineHeight: typography.bodySmall.lineHeight,
    color: colors.neutral[700],
    marginBottom: spacing.xl,
  },
  enterButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    alignSelf: "flex-start",
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: radius.full,
    backgroundColor: colors.gold[500],
    elevation: 4,
    shadowColor: colors.gold[500],
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  enterButtonText: {
    fontFamily: fonts.bodyBold,
    fontSize: typography.body.fontSize,
    color: colors.neutral[50],
  },
});