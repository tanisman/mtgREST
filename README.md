# mtgREST

operation: list all users, method: GET, address: /users
operation: create user, method: POST, address: /users => sample post data = { username: "kullaniciadi", password: "sifre", email: "mail@mail.com", phone_num: "+905554443322" }
operation: find user by id, method: GET, address: /users/:userId
operation: list all places, method: GET, address: /locations
operation: create a place, method: POST, address: /locations => sample post data = { name: "mekanismi", address: "adres", description: "hakkinda aciklama", has_wifi: true, has_wc: true, trk: [ {lat: "22.2213130", lng: "33.322130"} ] }
operation: find location by id, method: GET, address: /locations/:locationId
operation: find nearby locations, method: GET, address: /locations/:lat/:lng
operation: login, method: POST, address: /login => sample post data = { username: "kullaniciadi", password: "sifre" } 
operation: logout, method: POST, address: /logout => empty post

demo cloud: http://mtgapiservice.azurewebsites.net
