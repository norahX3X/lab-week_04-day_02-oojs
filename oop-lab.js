
console.log('oop-lab.js file loaded');

// PUT ATM CODE HERE

class ATM {
    constructor(type, money, backupAccount) {
        this.type = type
        this.money = money
        this.history = []
        this.backupAccount = backupAccount
    }

    // decrease the amount of money by some input
    withdraw(amount, purpose = "other") {
        if (this.money === 0 || this.money - amount < 0) {
            if (this.backupAccount.money == 0 || this.backupAccount.money - amount < 0)
                console.log("You'r broke :((((((((, YOU CAN'T your Acoount Balance is " + this.showBalance())
            else {
                this.money=+amount
                this.backupAccount.withdraw(amount)
                this.withdraw(amount,"from backup account")
                //this.money=+
            }
        }
        else {
            this.addToHistory('-', amount, this.money, this.money - amount, purpose)
            this.money = this.money - amount
        }
    }

    // increase the amount of money by some input
    deposit(amount, purpose = "other") {
        this.addToHistory('+', amount, this.money, this.money + amount, purpose)
        this.money = + amount
    }
    //print the amount of money in the bank to the console.

    showBalance() {
        return `${this.money} $`
    }

    addToHistory(kind, amount, oldbalence, newBalence, purpose) {
        kind == '-' ? this.history.push({ Date: Date(), Type: "Withdraw", oldbalence, Amount: amount, newBalence, Purpose: purpose }) :
            this.history.push({ Date: Date(), Type: "Deposit",  oldbalence, Amount: amount, newBalence, Purpose: purpose })
    }
    transactionHistory() {
        this.history.forEach(i => console.log(i))
    }
}
var noraAcount = new ATM("saving", 0,new ATM("backup",90));
noraAcount.withdraw(40);
noraAcount.deposit(1000000);
noraAcount.withdraw(50, "coffee");
console.log(noraAcount.showBalance())
noraAcount.transactionHistory()



// console.log(noraAcount.backupAccount.showBalance())

// PUT RECORD ALBUMS CODE HERE

class RecordAlbums {
    constructor(artistName, albumName, songs,currentSong) {
        this.artistName = artistName
        this.albumName = albumName
        this.songs = songs
        this.currentSong = this.songs(currentSong)
    }
    //prints out its result
    nextSong() {
        console.log(this.songs[this.songs.indexOf( this.currentSong)+1])

    }
    //prints out its result
    previousSong() {
        console.log(this.songs[this.songs.indexOf( this.currentSong)-1])
    }
    get artistName() {
        return this.artistName;
    }

    set artistName(newName) {
        this.artistName = newName;   // validation could be checked here such as only allowing non numerical values
    }
}
class Geometry 
{

}



// PUT GEOMETRY CODE HERE
