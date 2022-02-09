//Plan History

/*// const [newData, setNewData] = useState(DATA)

// const getPlanList = async () => {
//   try {
//     const response = await fetch('http://3.17.135.71:8000/api/plan/get_all_plans/');
//     const json = await response.json();
//     setData(json.movies);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     setLoading(false);
//   }
// }




// const Item = ({ image, text, title, navigation }) => (
//   const [newData, setNewData] = useState(DATA)

// const getPlanList = async () => {
//   try {
//     const response = await fetch('http://3.17.135.71:8000/api/plan/get_all_plans/');
//     const json = await response.json();
//     setData(json.movies);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     setLoading(false);
//   }
// }

//   return <TouchableOpacity onPress={()=>{
//     navigation.navigate('WorkoutDetail', {
//       text: text,
//       image: image,
//     })
//   }}>
//   <ImageBackground source={image} resizeMode="cover" style={styles.image}  imageStyle={styles.image}>
//   <View style={styles.item}>
//    <Text style={styles.text}>{title}</Text>
//    <Text style={styles.title}>{text}</Text>
//   </View>
//   </ImageBackground>
//   </TouchableOpacity>
// );*/



//screen3

/*
        <View style={{
          flexDirection: "row", width: 380, backgroundColor: "rgba(255, 255, 255, 0.4)",
          height: 150, borderRadius: 10, marginLeft: 20, marginTop: 15
        }}>
          <Image source={require('./images/image3.jpg')} style={{
            width: 105, borderRadius: 20, marginLeft: 10, marginRight: 20, marginTop: 10,
            height: 120, justifyContent: "center"
          }} />
          <View style={{ width: 80 }}>
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 16 }}>Abs</Text>
            <Text style={{ color: "white", fontSize: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing
              sed do eiusmod tempor incididunt</Text>

          </View>
          <View style={{ height: 130, marginTop: 5, width: 1, backgroundColor: '#000', }}></View>
          <View style={{ width: 70 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", marginLeft: 5, marginTop: 10 }} >Set</Text>
              <Icon name="arrow-right" color="white" style={{ marginLeft: -2, marginTop: 10 }} />
              <Text style={{ color: "white", marginLeft: -2, marginTop: 11, fontSize: 13 }} >10-15</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", marginLeft: 5, marginTop: 10 }} >Rep</Text>
              <Icon name="arrow-right" color="white" style={{ marginLeft: -2, marginTop: 10 }} />
              <Text style={{ color: "white", marginLeft: -4, marginTop: 11, fontSize: 13 }} >12-16</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", marginLeft: 5, marginTop: 10 }} >Rest</Text>
              <Icon name="arrow-right" color="white" style={{ marginLeft: -2, marginTop: 10 }} />
              <Text style={{ color: "white", marginLeft: -4, marginTop: 11, fontSize: 13 }} >30-40s</Text>
            </View>
          </View>
          <View style={{ height: 130, marginTop: 5, width: 1, backgroundColor: '#000', marginLeft: 30 }}></View>
          <FlatList
            contentContainerStyle={{ alignSelf: 'flex-start' }}
            numColumns={2}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>

        // const [loaded] = useFonts({
  //   Rambla: require("./assets/fonts/Rambla-Regular.ttf"),
  // });

  // if (!loaded) {
  //   return null;
  // }              
              
*/

//screen 4

/*
<View style={{ backgroundColor: '#222831', width: 370, height: 120, marginTop: 25, marginLeft: 20, flexDirection: "row", elevation: 10,
      shadowColor: "black" }}>
             <View>
            <Image source={data[0].image} style={{width: 100, height: 90, marginTop: 15, marginLeft: 9, borderRadius: 20}} />
            <Text style={{color: "white", marginTop: -24, marginLeft: 15, fontWeight: "bold"}}>{data[0].title}</Text>
            </View>
            <View>
            <View style={{flexDirection: "row"}}>
            <View style={{marginLeft: 25, marginTop: 20}}>
              <Text style={{color: "white"}}>Set</Text>
              <TextInput style={{width: 50}} underlineColorAndroid="grey" />
            </View>
            <View style={{marginLeft: 12,  marginTop: 20}}>
              <Text style={{color: "white"}}>Reps</Text>
              <TextInput style={{width: 50}} underlineColorAndroid="grey" />
            </View>
            <View style={{marginLeft: 12,  marginTop: 20}}>
              <Text style={{color: "white"}}>Rest</Text>
              <TextInput style={{width: 50}} underlineColorAndroid="grey" />
            </View>
            </View>
            <FlatList style={{marginLeft: 20}} horizontal data={days} renderItem={renderItems} />
            </View>
            <View style={{height: 120, width: 50, backgroundColor: '#eb1919', marginLeft: 6}}>
              <Icon name="delete" color="white" style={{marginTop: 50}} />
            </View>
      </View>
*/


//bottom.js
/*<RadialGradient
      colors={['black', '#393E36', 'grey']}
      stops={[0, 0.5, 1]}
      image={
        <ImageBackgroundPlaceholder style={imageStyle}>
          
        </ImageBackgroundPlaceholder>
      }
    />*/

/*
APIs Required:
1. get plan detail 
2. get all plan 
3. add plan 
4. fitness exercise read
5. Add exercise plan
*/