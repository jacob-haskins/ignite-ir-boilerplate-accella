import Fonts from "./Fonts"
import Metrics from "./Metrics"
import Colors from "./Colors"

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const Styles = {
	imageBackground: {
		width: "100%",
		height: "100%",
		backgroundColor: Colors.bgWhite
	},
	addDropShadow: {
		shadowRadius: 3,
		shadowOpacity: 0.15,
		shadowOffset: {
			height: 0,
			width: 0
		},
		elevation: 5
	},
	divider: {
		backgroundColor: Colors.dividerGrey,
		height: 1
	},
	row: {
		flexDirection: "row"
	},
	center: {
		alignSelf: "center"
	},
	shadowedContainer: {
		backgroundColor: Colors.white,
		shadowOpacity: 0.5,
		shadowOffset: {
			height: 0,
			width: 0
		},
		borderRadius: 5
	},
	demiBoldFont: {
		fontFamily: "Avenir Next",
		fontWeight: "600"
	},
	boldFont: {
		fontFamily: "Avenir Next",
		fontWeight: "bold"
	},
	mediumFont: {
		fontFamily: "Avenir Next",
		fontWeight: "500"
	},
	regularFont: {
		fontFamily: "Avenir Next"
	},
	pillInput: {
		backgroundColor: Colors.white,
		color: Colors.veryDarkGrey,
		height: 50,
		borderRadius: 50,
		marginBottom: 15,
		paddingHorizontal: 15,
		fontFamily: "Avenir Next",
		fontWeight: "500",
		fontSize: 18,
		shadowRadius: 10,
		shadowOpacity: 0.1,
		shadowOffset: {
			height: 0,
			width: 0
		},
		elevation: 2
	},
	input: {
		backgroundColor: Colors.transparent,
		color: Colors.white,
		height: 50,
		fontFamily: "Avenir Next",
		fontSize: 18,
		borderBottomColor: Colors.lightGrey,
		borderBottomWidth: 1
	},
	padded: {
		padding: 10
	},
	mainContainer: {
		flex: 1
	},
	backgroundImage: {
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	},
	container: {
		flex: 1,
		paddingTop: Metrics.baseMargin,
		backgroundColor: Colors.transparent
	},
	roundedContainer: {
		shadowRadius: 3,
		shadowOpacity: 0.15,
		shadowOffset: {
			height: 0,
			width: 0
		},
		elevation: 5,
		borderRadius: 7,
		marginHorizontal: 10,
		marginTop: 10
	},
	section: {
		margin: Metrics.section,
		padding: Metrics.baseMargin
	},
	sectionText: {
		...Fonts.style.normal,
		paddingVertical: Metrics.doubleBaseMargin,
		color: Colors.snow,
		marginVertical: Metrics.smallMargin,
		textAlign: "center"
	},
	subtitle: {
		color: Colors.snow,
		padding: Metrics.smallMargin,
		marginBottom: Metrics.smallMargin,
		marginHorizontal: Metrics.smallMargin
	},
	titleText: {
		...Fonts.style.h2,
		fontSize: 14,
		color: Colors.text
	},
	darkLabelContainer: {
		padding: Metrics.smallMargin,
		paddingBottom: Metrics.doubleBaseMargin,
		borderBottomColor: Colors.border,
		borderBottomWidth: 1,
		marginBottom: Metrics.baseMargin
	},
	darkLabel: {
		fontFamily: Fonts.type.bold,
		color: Colors.snow
	},
	groupContainer: {
		margin: Metrics.smallMargin,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center"
	},
	sectionTitle: {
		...Fonts.style.h4,
		color: Colors.coal,
		backgroundColor: Colors.ricePaper,
		padding: Metrics.smallMargin,
		marginTop: Metrics.smallMargin,
		marginHorizontal: Metrics.baseMargin,
		borderWidth: 1,
		borderColor: Colors.ember,
		alignItems: "center",
		textAlign: "center"
	}
}

export default Styles
