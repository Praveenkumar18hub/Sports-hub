import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  var images = [
    "https://cdn.siasat.com/wp-content/uploads/2022/06/IPL-2022.jpg",
    "https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg",
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202302/pti08_08_2022_000194b-sixteen_nine.jpg?VersionId=39htguj0fqO9jKd3K1_qrpX0LnidQozj&size=690:388",
  ];

  return (

    <View>
    <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor="#13274F"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
            borderRadius:6,
            width:"90%"
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});