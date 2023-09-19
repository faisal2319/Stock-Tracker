import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import NavBar from "../components/header/NavBar";
import Search from "../components/body/Search/search";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const Home = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <Stack.Screen
          options={{
            headerShadowVisible: false,
            headerLeft: () => (
              <NavBar iconUrl={"./images/malaa-logo.png"} dimensions="60%" />
            ),
            headerRight: () => (
              <NavBar iconUrl={"./images/menu.png"} dimensions="60%" />
            ),
            headerTitle: "",
          }}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 20 }}
        >
          <Search />
        </ScrollView>
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default Home;
