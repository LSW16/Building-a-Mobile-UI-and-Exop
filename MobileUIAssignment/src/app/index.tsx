import {
  Alert,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HomeScreen() {
  const showAlert = () => {
    if (Platform.OS === 'web') {
      window.alert('Alert Button pressed');
    } else {
      Alert.alert('Alert Button pressed');
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.logo}>TD</Text>

        <View style={styles.headerRight}>
          <Text style={styles.headerIcon}>✉</Text>
          <Text style={styles.menuIcon}>☰</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >

        <View style={styles.greeting}>
          <Text style={styles.hello}>Hello,</Text>
          <Text style={styles.name}>Alex</Text>
        </View>

        <View style={styles.actionsRow}>

          <Pressable style={styles.actionButton}>
            <Text style={styles.actionIcon}>⇄</Text>
            <Text style={styles.actionText}>Transfer</Text>
          </Pressable>

          <Pressable style={styles.actionButton}>
            <Text style={styles.actionIcon}>$</Text>
            <Text style={styles.actionText}>Pay Bill</Text>
          </Pressable>

          <Pressable style={styles.actionButton}>
            <Text style={styles.actionIcon}>＋</Text>
            <Text style={styles.actionText}>Deposit</Text>
          </Pressable>

        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Accounts</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>

        <View style={styles.accountCard}>

          <View style={styles.accountTop}>

            <View>
              <Text style={styles.accountType}>
                TD CHEQUING ACCOUNT
              </Text>

              <Text style={styles.accountNumber}>
                •••• 1234
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>

          </View>

          <View style={styles.balanceArea}>
            <Text style={styles.balanceLabel}>
              Available Balance
            </Text>

            <Text style={styles.balance}>
              $2,450.75
            </Text>
          </View>

        </View>

        <Pressable style={styles.addAccounts}>

          <View style={styles.plusCircle}>
            <Text style={styles.plus}>＋</Text>
          </View>

          <View style={styles.addInfo}>
            <Text style={styles.addTitle}>
              Add an Account
            </Text>

            <Text style={styles.addSubtitle}>
              Open a new TD account
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>

        </Pressable>

        <Text style={styles.servicesTitle}>
          Services
        </Text>

        <View style={styles.serviceCard}>

          <View style={styles.serviceIcon}>
            <Text style={styles.serviceIconText}>$</Text>
          </View>

          <View style={styles.serviceInfo}>
            <Text style={styles.serviceTitle}>
              TD MySpend
            </Text>

            <Text style={styles.serviceDescription}>
              Track your spending and manage your money.
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>

        </View>

        <View style={styles.serviceCard}>

          <View style={styles.serviceIcon}>
            <Text style={styles.serviceIconText}>?</Text>
          </View>

          <View style={styles.serviceInfo}>
            <Text style={styles.serviceTitle}>
              Need Help?
            </Text>

            <Text style={styles.serviceDescription}>
              Find answers and contact TD.
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>

        </View>

        <Pressable
          style={styles.alertButton}
          onPress={showAlert}
        >
          <Text style={styles.alertButtonText}>
            Alert
          </Text>
        </Pressable>

      </ScrollView>

      <View style={styles.bottomNav}>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>⌂</Text>
          <Text style={styles.navTextActive}>Home</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>$</Text>
          <Text style={styles.navText}>Accounts</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>⇄</Text>
          <Text style={styles.navText}>Transfer</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>☰</Text>
          <Text style={styles.navText}>More</Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  header: {
    height: 70,
    backgroundColor: '#00853f',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  logo: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
  },

  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 22,
  },

  headerIcon: {
    color: '#ffffff',
    fontSize: 24,
  },

  menuIcon: {
    color: '#ffffff',
    fontSize: 25,
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 30,
  },

  greeting: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 20,
  },

  hello: {
    fontSize: 16,
    color: '#555555',
  },

  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#222222',
    marginTop: 2,
  },

  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    paddingBottom: 22,
    paddingHorizontal: 10,
  },

  actionButton: {
    width: '30%',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#f3f8f5',
  },

  actionIcon: {
    fontSize: 24,
    color: '#00853f',
    marginBottom: 5,
  },

  actionText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333333',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 12,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#222222',
  },

  viewAll: {
    color: '#00853f',
    fontWeight: '600',
  },

  accountCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 20,
    elevation: 2,
  },

  accountTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  accountType: {
    fontSize: 12,
    color: '#666666',
    fontWeight: '700',
  },

  accountNumber: {
    fontSize: 14,
    color: '#555555',
    marginTop: 5,
  },

  arrow: {
    fontSize: 28,
    color: '#777777',
  },

  balanceArea: {
    marginTop: 25,
  },

  balanceLabel: {
    color: '#777777',
    fontSize: 13,
  },

  balance: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222222',
    marginTop: 4,
  },

  addAccounts: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginTop: 14,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  plusCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#e6f4ec',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  plus: {
    fontSize: 25,
    color: '#00853f',
  },

  addInfo: {
    flex: 1,
  },

  addTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222222',
  },

  addSubtitle: {
    fontSize: 13,
    color: '#777777',
    marginTop: 3,
  },

  servicesTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#222222',
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 12,
  },

  serviceCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  serviceIcon: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#e6f4ec',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  serviceIconText: {
    color: '#00853f',
    fontSize: 22,
    fontWeight: 'bold',
  },

  serviceInfo: {
    flex: 1,
  },

  serviceTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222222',
  },

  serviceDescription: {
    fontSize: 12,
    color: '#777777',
    marginTop: 4,
    lineHeight: 17,
  },

  alertButton: {
    backgroundColor: '#00853f',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 15,
    height: 52,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  alertButtonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  bottomNav: {
    height: 72,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  navIcon: {
    fontSize: 21,
    color: '#777777',
  },

  navText: {
    fontSize: 11,
    color: '#777777',
    marginTop: 4,
  },

  navTextActive: {
    fontSize: 11,
    color: '#00853f',
    fontWeight: '700',
    marginTop: 4,
  },

});