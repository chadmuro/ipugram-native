import React, { useState, useEffect } from "react";
import { Button, Platform, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Yup from "yup";
import { Formik } from "formik";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../screens/Navigation";

const uploadPostSchema = Yup.object().shape({
  caption: Yup.string().max(
    2200,
    "Caption has reached the character limit",
  ),
});

const PostUploaderContainer = styled.View`
  margin: 20px;
  justify-content: space-between;
  align-items: center;
`;

const PostUploadAddIcon = styled.TouchableOpacity`
  margin-bottom: 16px;
`;

const PostUploadImage = styled.Image`
  width: 200px;
  height: 200px;
`;

const PostUploadCaption = styled.TextInput`
  align-self: flex-start;
  margin-top: 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.common.white};
`;

const ErrorText = styled.Text`
  font-size: 10px;
  color: red;
`;

const PostUploader = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<
    StackParamList,
    "NewPostScreen"
  >;
}) => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Sorry, we need camera roll permissions to make this work!",
          );
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      presentationStyle: 0,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => {
        console.log(values);
        console.log("Your post was submitted successfully!");
        navigation.goBack();
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <PostUploaderContainer>
            <PostUploadAddIcon onPress={pickImage}>
              <Ionicons name="add-outline" size={30} color="white" />
            </PostUploadAddIcon>
            {image && <PostUploadImage source={{ uri: image }} />}
            <PostUploadCaption
              placeholder="Write a caption"
              placeholderTextColor="gray"
              multiline={true}
              onChangeText={handleChange("caption")}
              onBlur={handleBlur("caption")}
              value={values.caption}
            />
            {errors.caption && (
              <ErrorText>{errors.caption}</ErrorText>
            )}
            <Button
              onPress={handleSubmit}
              title="Share"
              disabled={!isValid || !image}
            />
          </PostUploaderContainer>
        </>
      )}
    </Formik>
  );
};

export default PostUploader;
