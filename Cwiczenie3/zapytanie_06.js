// -- Dodaj siebie do bazy, zgodnie z formatem danych użytych dla innych osób
// (dane dotyczące karty kredytowej, adresu zamieszkania i wagi mogą być fikcyjne
printjson(db.people.insertOne(
  {
		"sex" : "Male",
		"first_name" : "Yaroslav",
		"last_name" : "Kohun",
		"job" : "Data Engineer",
		"email" : "s15258@pjwstk.edu.pl",
		"location" : {
			"city" : "Warsaw",
			"address" : {
				"streetname" : "Good Street",
				"streetnumber" : "777"
			}
		},
		"description" : "Develorep",
		"height" : "192.5",
		"weight" : "83.5",
		"birth_date" : "1999-05-07T07:00:24Z",
		"nationality" : "Ukrainian",
		"credit" : [
			{
				"type" : "mastercard",
				"number" : "1234567891234567",
				"currency" : "PLN",
				"balance" : "12345.67"
			}
		]
	}
))
