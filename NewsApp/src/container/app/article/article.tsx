import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import applyStyles from './articleStyling';
import {dateFormat} from '../../../kits/helpers';

interface Props {
  navigation: any;
  route: any;
}

interface ArticleDetailsProps {
  content: string;
  description: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
  title: string;
  url: string;
}

const Article: React.FC<Props> = ({navigation, route}) => {
  const article: ArticleDetailsProps = route?.params?.item;

  const handleOpenUrl = () => {
    Linking.openURL(article.url);
  };
  return (
    <View style={applyStyles().container}>
      <Image source={{uri: article.image}} style={applyStyles().image} />
      <View style={applyStyles().content}>
        <Text style={applyStyles().title}>{article.title}</Text>
        <Text style={applyStyles().source}>{article.source.name}</Text>
        <Text style={applyStyles().publishedAt}>
          {dateFormat(article.publishedAt)}
        </Text>

        <Text style={applyStyles().content}>{article.content}</Text>
        <TouchableOpacity style={applyStyles().button} onPress={handleOpenUrl}>
          <Text style={applyStyles().buttonText}>Read Full Article</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Article;
