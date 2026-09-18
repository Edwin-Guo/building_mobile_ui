import { Image, Pressable, StyleSheet, Text, View } from "react-native";
const onPressFunction = () => alert("Alert Button Pressed");

export default function Index() {
  return (
    <>
      <View style={styles.header}>
        <View style={styles.leftSide}>
          <Image
            source={require("../../assets/images/left-arrow.png")}
            // https://www.svgrepo.com/svg/408302/chevron-left-arrow
            style={{ width: 40, height: 40 }}
          />
        </View>
        <View style={styles.center}>
          <Text style={[styles.faded, styles.bold]}>OOTD_EVERDAY</Text>
          <Text style={[styles.bold, { fontSize: 20 }]}>Posts</Text>
        </View>
        <View style={styles.rightSide}></View>
      </View>
      <View style={styles.border}></View>

      <View style={styles.bar}>
        <View>
          <Image
            source={require("../../assets/images/placeholder-person.png")}
            // https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/
            style={{ width: 50, height: 50, marginRight: 10, borderRadius: 25 }}
          />
        </View>
        <View>
          <Text style={[styles.bold, { fontSize: 16 }]}>ootd_everday</Text>
          <Text>via frenchie_fry39</Text>
        </View>
        <View style={styles.rightSide}>
          <Image
            source={require("../../assets/images/meatball-menu.png")}
            // https://thenounproject.com/icon/3-dots-585197/
            style={{ width: 25, height: 25 }}
          />
        </View>
      </View>

      <View>
        <Image
          source={require("../../assets/images/placeholder-person.png")}
          style={{
            width: "100%",
            height: 500,
            marginRight: 10,
          }}
        />
      </View>
      <Pressable onPress={onPressFunction}>
        <Text>Alert</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  faded: {
    color: "#a6a6a6",
  },
  bold: {
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 50,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  center: {
    alignItems: "center",
    flex: 2,
  },
  leftSide: {
    flex: 1,
  },
  rightSide: {
    flex: 1,
    alignItems: "flex-end",
  },
  border: {
    borderWidth: 1,
    borderColor: "#a6a6a6",
  },
  bar: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
});
