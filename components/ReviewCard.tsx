import { Text, View } from "./Themed";
import { Image } from "react-native";


export default function ReviewCard({props}:{props:{
    img?: string,
    name: string,

}}){

    const {img, name} = props;
    return(
        <View style={{ backgroundColor: '#000', borderRadius: 30, width: '90%', height: 'auto', paddingVertical:25, paddingHorizontal: 30, alignSelf: "center", justifyContent: "center", alignItems:"center", flexDirection: "row", columnGap: 10 }}>
        {/* image */}
        <Image
          style={{ minWidth: 80, minHeight: 80, height: 90, aspectRatio: 1, borderRadius: 10, flex: 1.2 }}
          source={require("../assets/images/iceCream.svg")}
        />
        {/* Text content */}
        <View style={{ flex: 2.5, flexDirection: "column", backgroundColor: 'transparent', rowGap: 4 }}>
          {/* Name */}
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 17, marginBottom:5 }}>{name}</Text>
          {/* Details */}
          <View style={{ flexDirection: "row", backgroundColor: 'transparent',justifyContent:"flex-start"  }}>
            <Text style={{ flex: 2, fontSize: 13, color:"white", fontWeight:"100" }}>5.0</Text>
            <Text style={{alignSelf:"flex-start"}}> ⭐️⭐️⭐️⭐️⭐️</Text>
          </View>
          <Text style={{color:"white", fontSize:12}}>
          Very Tasty and Good customer Service with great offers.
          </Text>
         


        </View>

      </View>
    )
}