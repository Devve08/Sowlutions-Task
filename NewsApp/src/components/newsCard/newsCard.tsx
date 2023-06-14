import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import applyStyles from './newsCardStyling';
import {dateFormat} from '../../kits/helpers';

interface NewsCardProps {
  image: string;
  title: string;
  description: string;
  publicationDate: string;
  navigation: any;
  item: any
}

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  title,
  description,
  publicationDate,
  navigation,
  item
}) => {
  return (
    <Pressable onPress={()=>navigation.navigate('article', {item})} style={applyStyles().container}>
      <Image source={{uri: image}} style={applyStyles().image} />
      <View style={applyStyles().content}>
        <Text style={applyStyles().title}>{title}</Text>
        <Text style={applyStyles().description}>{description}</Text>
        <Text style={applyStyles().date}>{dateFormat(publicationDate)}</Text>
      </View>
    </Pressable>
  );
};

export default NewsCard;
