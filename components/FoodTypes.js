import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native'
import React from 'react'

const FoodTypes = () => {
    const types = [
        {
            id:"0",
            image:"https://fitleap.in/wp-content/uploads/2022/09/cricket-bat.jpg",
            name:"Bat",
        },
        {
            id:"1",
            image:"https://m.media-amazon.com/images/I/61uxKvea0OL._SX425_.jpg",
            name:"Football"
        },
        {
            id:"2",
            image:"https://images.newindianexpress.com/uploads/user/imagelibrary/2022/8/27/w900X450/Sharon_Chepchumba_Kiprono_AP.jpg?w=400&dpr=2.6",
            name:"Volleyball"
        },
        {
            id:"3",
            image:"https://www.tutorialspoint.com/badminton/images/badminton_racket.jpg",
            name:"Badminton",

        },
        {
            id:"4",
            image:"https://img.freepik.com/free-photo/strong-man-training-gym_1303-23478.jpg?w=2000",
            name:"Gym"
        }
    ]

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((item,index) => (
            <View style={{margin:10}} key={index}>
                <Image source={{uri:item.image}} style={{width:70,height:70,borderRadius:30}}/>
                <Text style={{marginTop:6,textAlign:"center",fontWeight:"bold"}}>{item.name}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default FoodTypes

const styles = StyleSheet.create({})