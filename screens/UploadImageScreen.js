import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Platform,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import {
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import HeaderButtonComponent from "../Components/HeaderButton";
import firebase from "firebase/app";
import "firebase/storage";
import Form from "./Form";

export default function ImagePickerExample(props) {
  const [image, setImage] = useState(null);
  const [data, setData] = useState("");
  //   const [editor, setEditor] = useState(false);
  const [upload, setUpload] = useState(false);
  const [description, setDescription] = useState("");

  const getImages = async () => {
    const res = await MediaLibrary.getAssetsAsync({
      first: 100,
    });
    setData(res.assets);
    data[0] && setImage(data[0]);
  };

  const uploadData = async (url) => {
    const response = await fetch(
      "https://insta-clone-522aa-default-rtdb.firebaseio.com/posts.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: new Date().toString(),
          profilePic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5OVNjuB3WZe4cjztwgxfoLTswodimdxKgbg&usqp=CAU",
          caption: description,
          postImage: url,
          likes: ["1"],
          comment: ["1"],
          userName: "johnDoe",
        }),
      }
    );
    // const resData = await response.json();
    const setChange = props.route.params
      ? props.route.params.setChange
      : null;
    setChange((prev) => !prev);
    props.navigation.navigate("HOME", { change: true });
    // console.log(resData);
  };

  const uploadAsFile = async (uri) => {
    console.log("uploadAsFile", uri);
    const response = await fetch(uri);
    const blob = await response.blob();

    var metadata = {
      contentType: "image/jpeg",
    };

    let name = image.filename;
    const ref = firebase
      .storage()
      .ref()
      .child("images/" + name);

    const task = ref.put(blob, metadata);

    return new Promise((resolve, reject) => {
      task.on(
        "state_changed",
        (snapshot) => {
          var progress =
            (snapshot.bytesTransferred /
              snapshot.totalBytes) *
            100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => reject(error),
        () => {
          task.snapshot.ref.getDownloadURL().then((url) => {
            // console.log(url)
            uploadData(url);
          });
          // save a reference to the image for listing purposes
          //   var ref = firebase.database().ref('assets');
          //   ref.push({
          //     'URL': downloadURL,
          //     //'thumb': _imageData['thumb'],
          //     'name': name,
          //     //'coords': _imageData['coords'],
          //     'owner': firebase.auth().currentUser && firebase.auth().currentUser.uid,
          //     'when': new Date().getTime()
          //   }).then(r => resolve(r), e => reject(e))
        }
      );
    });
  };

  const uploadImage = async () => {
    uploadAsFile(image.uri);
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert(
            "Sorry, we need camera roll permissions to make this work!"
          );
        } else {
          getImages();
        }
      }
    })();
  }, [props.navigation]);
  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderButtons
          HeaderButtonComponent={HeaderButtonComponent}
        >
          <Item
            iconName={
              upload
                ? "arrow-back"
                : "arrow-forward-outline"
            }
            color="blue"
            onPress={() => {
              // uploadImage();
              setUpload((prev) => !prev);
            }}
          />
          {upload && (
            <Item
              iconName="checkmark-outline"
              color="blue"
              onPress={() => {
                uploadImage();
              }}
            />
          )}
        </HeaderButtons>
      ),
    });
  });

  if (upload) {
    return (
      <Form
        image={image.uri}
        description={description}
        setDescription={setDescription}
      />
    );
  }

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <View style={{ maxWidth: 600 }}>
        {image && (
          <View>
            <Image
              source={image}
              style={{
                width: "100%",
                height: "100%",
                // maxWidth: 600,
                maxHeight: 600,
                marginBottom: 5,
              }}
            />
          </View>
        )}
        <View
          style={{
            height: image ? "60%" : "100%",
          }}
        >
          <FlatList
            data={data}
            numColumns={3}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  width: "33%",
                  height: 150,
                }}
                onPress={() => {
                  setImage(item);
                  // console.log(image);
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  source={{ uri: item.uri }}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({});

{
  /* <SafeAreaView> */
}
{
  /* <ImageEditor
          visible={editor}
          onCloseEditor={() => setEditor(false)}
          imageUri={image && image.uri}
            fixedCropAspectRatio={1 / 1}
            minimumCropDimensions={{
              width: 100,
              height: 100,
            }}
            mode={'full'}
          onEditingComplete={(res) => {
            setImage(res);
          }}
        /> */
}
{
  /* <ImageManipulator
        photo={{ uri: image ? image.uri : "" }}
        isVisible={editor}
        onPictureChoosed={(img) => {
          // console.log(img);
          setImage({
            ...image,
            uri: img.uri,
            width: 600,
            height: 600,
          });
        }}
        onToggleModal={() => setEditor((prev) => !prev)}
        fixedMask={{ width: width, height: width }}
      /> */
}
{
  /* </SafeAreaView> */
}
