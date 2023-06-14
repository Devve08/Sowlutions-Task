import React from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
} from 'react-native';
import {useAppDispatch} from '../../../kits/hooks';
import {getAllNews} from '../../../reducerLayer/newsReducer';
import useFetch from '../../../customHooks/useFetch';
import NewsCard from '../../../components/newsCard/newsCard';
import applyStyles from './homeStyling';
import useInput from '../../../customHooks/useInput';
import AppLoader from '../../../components/appLoader/appLoader';

interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({navigation}) => {
  const {news, handleOnPress, isLoading, error} = useFetch();
  const {inputValue, getInputValue} = useInput();

  return (
    <View style={applyStyles().container}>
      {isLoading && <AppLoader />}
      <Text style={applyStyles().title}>News App</Text>
      <View style={applyStyles().inputContainer}>
        <TextInput
          onChangeText={text => getInputValue(text)}
          style={applyStyles().input}
        />
        <TouchableOpacity
          disabled={inputValue.trim() === ''}
          style={applyStyles().searchBtn}
          onPress={() => handleOnPress(inputValue)}>
          <Text style={applyStyles().btnText}>Search</Text>
        </TouchableOpacity>
      </View>
      {error && (
        <View style={applyStyles().error}>
          <Text style={{color: 'tomato'}}>{error}</Text>
        </View>
      )}

      {!error && news.length === 0 && (
        <View style={applyStyles().error}>
          <Text>No articles Found</Text>
        </View>
      )}
      {!error && news.length > 0 && (
        <View style={{marginBottom: 120}}>
          <FlatList
            data={news}
            renderItem={({item, index}) => (
              <NewsCard
                image={item?.image}
                title={item?.title}
                description={item?.description}
                publicationDate={item?.publishedAt}
                navigation={navigation}
                item={item}
              />
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Home;
