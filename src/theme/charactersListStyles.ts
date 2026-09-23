import { Platform, StyleSheet } from "react-native";
import { colors } from "./colors";
import { fonts, radius, spacing, typography } from "./spacing";

export const charactersListStyles = StyleSheet.create({
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
  header: {
    paddingHorizontal: spacing.xl,
    paddingTop: Platform.OS === "web" ? spacing.lg : spacing.xxxl,
    paddingBottom: spacing.sm,
  },
  headerTitle: {
    fontFamily: fonts.display,
    fontSize: typography.h2.fontSize,
    color: colors.gold[400],
    letterSpacing: 1,
  },
  headerSubtitle: {
    fontFamily: fonts.body,
    fontSize: typography.bodySmall.fontSize,
    color: colors.neutral[700],
    marginTop: spacing.xs,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.neutral[200],
    borderRadius: radius.lg,
    paddingHorizontal: spacing.md,
    marginHorizontal: spacing.xl,
    marginVertical: spacing.md,
    borderWidth: 1,
    borderColor: colors.neutral[300],
  },
  searchInput: {
    flex: 1,
    fontFamily: fonts.body,
    fontSize: typography.body.fontSize,
    color: colors.neutral[900],
    paddingVertical: spacing.md,
    marginLeft: spacing.sm,
  },
  listContent: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xxxl,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.neutral[100],
    borderRadius: radius.lg,
    marginBottom: spacing.md,
    padding: spacing.sm,
    borderWidth: 1,
    borderColor: colors.neutral[300],
  },
  cardImage: {
    width: 64,
    height: 64,
    borderRadius: radius.md,
  },
  cardInfo: {
    flex: 1,
    marginLeft: spacing.md,
  },
  cardName: {
    fontFamily: fonts.bodyBold,
    fontSize: typography.body.fontSize,
    color: colors.neutral[900],
  },
  cardNickname: {
    fontFamily: fonts.body,
    fontSize: typography.bodySmall.fontSize,
    color: colors.gold[400],
    marginTop: 2,
  },
  cardHouse: {
    fontFamily: fonts.body,
    fontSize: typography.caption.fontSize,
    color: colors.neutral[600],
    marginTop: 2,
  },
  emptyText: {
    fontFamily: fonts.body,
    fontSize: typography.body.fontSize,
    color: colors.neutral[700],
    textAlign: "center" as const,
    marginTop: spacing.xxl,
  },
});