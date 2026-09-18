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
            style={styles.smallImage}
          />
        </View>
      </View>

      <View>
        <Image
          source={require("../../assets/images/placeholder-person.png")}
          style={{
            width: "100%",
            height: 400,
            marginRight: 10,
          }}
        />
      </View>

      <View style={styles.bar}>
        <View>
          <Image
            source={require("../../assets/images/heart.png")}
            // https://www.svgrepo.com/svg/532473/heart
            style={styles.mainIcons}
          />
        </View>

        <View>
          <Image
            source={require("../../assets/images/text-bubble.png")}
            // https://www.svgrepo.com/svg/533232/message-circle
            style={styles.mainIcons}
          />
        </View>

        <View>
          <Image
            source={require("../../assets/images/plane.png")}
            // https://www.svgrepo.com/svg/437099/paperplane
            style={styles.mainIcons}
          />
        </View>

        <View style={styles.rightSide}>
          <Image
            source={require("../../assets/images/bookmark.png")}
            // https://www.svgrepo.com/svg/520557/bookmark
            style={styles.mainIcons}
          />
        </View>
      </View>

      <View style={styles.bar}>
        <Image
          source={require("../../assets/images/placeholder-person.png")}
          // https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/
          style={[styles.smallImage, { borderRadius: 25, marginRight: -5 }]}
        />
        <Image
          source={require("../../assets/images/placeholder-person.png")}
          // https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/
          style={[styles.smallImage, { borderRadius: 25, marginRight: -5 }]}
        />
        <Image
          source={require("../../assets/images/placeholder-person.png")}
          // https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/
          style={[styles.smallImage, { borderRadius: 25, marginRight: 10 }]}
        />
        <Text style={styles.comment}>
          Liked by <Text style={styles.bold}>paisley.print48</Text> and{" "}
          <Text style={styles.bold}>7 others</Text>
        </Text>
      </View>
      <View style={styles.commentSection}>
        <Text style={styles.comment}>
          <Text style={styles.bold}>frenchie_fry39</Text> Fresh shot on a sunny
          day! ☀️
        </Text>
        <Text style={[styles.comment, styles.faded]}>View all 12 comments</Text>
        <Text style={styles.comment}>
          <Text style={styles.bold}>lil_wyatt838</Text> Awesome tones
        </Text>
        <Text style={styles.comment}>
          <Text style={styles.bold}>pia.in.a.pod</Text> Gorg. Love it! ❤️
        </Text>
        <Text style={[styles.faded, { fontSize: 12 }]}>1 day ago</Text>
      </View>
      <View>
        <Pressable onPress={onPressFunction} style={styles.button}>
          <Text style={{ color: "#FFFFFF" }}>Alert</Text>
        </Pressable>
      </View>
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
  mainIcons: {
    width: 35,
    height: 35,
    marginRight: 15,
  },
  smallImage: {
    width: 25,
    height: 25,
  },
  comment: {
    paddingVertical: 4,
    fontSize: 15,
  },
  commentSection: {
    paddingHorizontal: 20,
  },
  button: {
    margin: 10,
    backgroundColor: "#4150f7",
    padding: 10,
    borderRadius: 10,
    width: 100,
    alignItems: "center",
    alignSelf: "center",
  },
});
