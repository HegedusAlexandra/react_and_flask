from flask import Flask, jsonify
import datetime

x = datetime.datetime.now()

app = Flask(__name__)

class Szoba:
    def __init__(self, ar, szobaszam, kilatas, tipus):
        self.ar = ar
        self.szobaszam = szobaszam
        self.kilatas = kilatas
        self.tipus = tipus

    def osszkoltseg(self, napok):
        pass

class EgyagyasSzoba(Szoba):
    def __init__(self, szobaszam, kilatas, tipus):
        super().__init__(ar=50, szobaszam=szobaszam, kilatas=kilatas, tipus=tipus)

    def osszkoltseg(self, napok):
        return self.ar * napok

class KetagyasSzoba(Szoba):
    def __init__(self, szobaszam, kilatas, tipus):
        super().__init__(ar=70, szobaszam=szobaszam, kilatas=kilatas, tipus=tipus)

    def osszkoltseg(self, napok):
        return self.ar * napok

class Szalloda:
    def __init__(self, nev):
        self.nev = nev
        self.szobak = []

    def szoba_hozzaadasa(self, szoba):
        self.szobak.append(szoba)

    def foglalas(self, szobaszam, napok):
        for szoba in self.szobak:
            if szoba.szobaszam == szobaszam:
                return szoba.osszkoltseg(napok)
        return None

class Foglalas:
    def __init__(self, szobaszam, nap):
        self.szobaszam = szobaszam
        self.nap = nap

rooms = []
for i in range(1, 31):
    if i % 2 == 0:
        room = KetagyasSzoba(szobaszam=i, kilatas="Tóra néző" if i > 22 else 'Városra néző' if i > 12 else 'Kertre néző', tipus="Ketágyas")
    else:
        room = EgyagyasSzoba(szobaszam=i, kilatas="Tóra néző" if i > 18 else 'Városra néző' if i > 6 else 'Kertre néző' , tipus="Egyágyas")
    rooms.append(room)

@app.route('/data')
def get_time():
    # Returning an api for showing in reactjs
    return {
        'Name':"Alexandra", 
        "Age":"34",
        "Date":'2024.04.21', 
        "programming":"python"
    }

@app.route('/rooms')
def get_rooms():
    room_data = []
    for room in rooms:
        room_info = {
            'szobaszam': room.szobaszam,
            'ar': room.ar,
            'tipus': room.tipus,
            'kilatas': room.kilatas
        }
        room_data.append(room_info)
    return jsonify(room_data)  

# Running app
if __name__ == '__main__':
    app.run(debug=True)
