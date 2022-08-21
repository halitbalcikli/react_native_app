import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icons from "react-native-heroicons/outline"
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);


    return (
        <SafeAreaView className="bg-white">
            { /*  Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />

                <View className="flex-1">
                    <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                    <Text className='font-bold text-xl'>
                        Current Location
                        <Icons.ChevronDownIcon size="20" color="#00CCBB" />
                    </Text>
                </View>

                <Icons.UserIcon size="30" color="#00CCBB" className="mx-8" />
            </View>

            { /* Search */}
            <View className="flex-row items-center space-x-2 mx-4">
                <View className="flex-row flex-1 space-x-2 bg-gray-100 p-3">
                    <Icons.SearchIcon color="gray" size={20} />
                    <TextInput
                        placeholder='Restaurants and cuisines'
                        keyboardType='default'
                        onChangeText={text => console.log("text", text)} />
                </View>

                <Icons.AdjustmentsIcon color='#00CCBB' />
            </View>

            { /*  Body */}
            <ScrollView
                className="bg-gray-100 flex-1 my-2"
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            >
                { /*  Categories */}
                <Categories />

                { /*  Featured Rows */}
                <FeaturedRow
                    id="123"
                    title="Featured"
                    description="Paid placements from our partners"
                />
                <FeaturedRow
                    id="1234"
                    title="Featured"
                    description="Paid placements from our partners"
                />
                <FeaturedRow
                    id="12345"
                    title="Featured"
                    description="Paid placements from our partners"
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen