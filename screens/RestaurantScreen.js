import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { ArrowLeftIcon, LocationMarkerIcon, StarIcon } from 'react-native-heroicons/outline'

const RestaurantScreen = () => {
    const { params } = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <ScrollView>
            <View className="relative">
                <Image
                    source={{
                        uri: params.imgUrl
                    }}
                    className="w-full h-56 bg-gray-300 p-4"
                />
                <TouchableOpacity onPress={navigation.goBack} className="absolute top-14 left-4 p-2 bg-gray-100 rounded-full">
                    <ArrowLeftIcon size={18} color="#00CCBB" />
                </TouchableOpacity>
            </View>

            <View className="bg-white">
                <View className="px-4 pt-4">
                    <Text className="text-2xl font-bold">{params.title}</Text>
                    <View className="flex-row space-x-2 my-1">
                        <View className="flex-row items-center space-x-1">
                            <StarIcon color="green" opacity={0.5} size="18" />
                            <Text className="text-xs text-gray-500">
                                <Text className="text-green-500"> {params.rating} </Text> . {params.genre}
                            </Text>
                        </View>

                        <View className="flex-row items-center space-x-1">
                            <LocationMarkerIcon color="gray" opacity={0.6} size="18" />
                            <Text className="text-xs text-gray-500">
                                <Text className="text-gray-500">Nearby . {params.address} </Text>
                            </Text>
                        </View>
                    </View>

                    <Text className="text-gray-500 mt-2 pb-4"> {params.short_description}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default RestaurantScreen