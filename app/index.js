import { useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { Stack , useRouter} from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import { Nearbyjobs, Popularjobs, SxreenHeaderBtn, Welcome } from "../components";

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
            {/* Layout Definition */}
            <Stack.Screen
                options={{
                    headerStyle:{backgroundColor:COLORS.lightWhite}
                }}
            />
        </SafeAreaView>
    )
}

export default Home