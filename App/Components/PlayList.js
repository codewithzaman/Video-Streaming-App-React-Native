import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'

function PlayListCopy() {
   const courseList=[
        {
            id:1,
            name:'Ultimate Angular Tutorial',
            imageUrl:'https://i.ytimg.com/vi/NlGkd7TlBDs/maxresdefault.jpg'
        },
        {
            id:2,
            name:'Figma UI/UX Tutorial',
            imageUrl:'https://i.ytimg.com/vi/YLypVu78YTU/maxresdefault.jpg',
        },
        {
            id:3,
            name:'React Tutorial',
            imageUrl:'https://i.ytimg.com/vi/nXyQYpalYgg/maxresdefault.jpg',
        }
    ]
  return (
   <View style={styles.container}>
    <Text style={styles.heading}>Top Course List</Text>
    <FlatList
    data={courseList}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    renderItem={({item})=>
    <View>
        <Image source={{uri:item.imageUrl}} style={styles.image}/>    
        <Text style={styles.nameText}>{item.name}</Text>
    </View>

    }
    />
   </View>
  )
}
const styles = StyleSheet.create({
    container:{
        marginTop:15
    },
    heading:{
        fontSize:20,
        color:'#fff',
        fontWeight:'bold',
        marginBottom:10
    },
    image:{
        width:220,
        height:130,
        marginRight:15,
        borderRadius:5
    },
    nameText:{
        color:'#fff',
        fontSize:17,
        
        padding:5
    }
})

export default PlayListCopy
