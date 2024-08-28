import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  View,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "..";
import getUsers from "../../services/getUsers";
import CardUser from "../../components/CardUser";
import colors from "../../../assets/colors";
import styles from "./style";
import strings from "../../../assets/strings";

export interface UserProps {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
}

interface Pagination {
  per_page: number;
  total: number;
  total_pages: number;
}

export type usersScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "Users"
>;

const Users: React.FC = () => {
  const navigation = useNavigation<usersScreenProp>();
  const [users, setUsers] = useState<UserProps[] | null>([]);
  const [pagination, setPagination] = useState<Pagination>({
    per_page: 1,
    total_pages: 1,
    total: 1,
  });
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(true);

  const loadData = async (nextPage: number) => {
    try {
      const { data, per_page, total, total_pages } = await getUsers(nextPage);
      setPagination({ per_page, total, total_pages });
      setUsers([...(users || []), ...(data || [])]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData(page);

    return () => {
      setUsers([]);
    };
  }, []);

  const loadMore = () => {
    if (loadingMore) {
      if (page < pagination.total_pages) {
        setLoadingMore(true);
        const nextPage = page + 1;
        setPage(nextPage);
        loadData(nextPage);
      }
      if (page === pagination.total_pages) setLoadingMore(false);
    }
  };

  const renderFooter = () => {
    if (!loadingMore) return null;
    return (
      <ActivityIndicator
        style={{ marginTop: 4 }}
        color={colors.primaryColor}
        animating
        size="large"
      />
    );
  };

  const handlePressItem = (user: UserProps) => {
    navigation.navigate("UserDetail", user);
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && (
        <ActivityIndicator
          color={colors.primaryColor}
          size="large"
          style={styles.loading}
        />
      )}

      <Text style={styles.textTitle}>{strings.users}</Text>
      {!loading && (
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={users}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => (
            <CardUser
              id={item.id}
              first_name={item.first_name}
              last_name={item.last_name}
              avatar={item.avatar}
              email={item.email}
              onPressItem={() => handlePressItem(item)}
            />
          )}
          ListFooterComponent={renderFooter}
          onEndReached={loadMore}
          onEndReachedThreshold={0.1}
        />
      )}
    </SafeAreaView>
  );
};
export default Users;
