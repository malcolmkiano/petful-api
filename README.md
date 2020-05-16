# Petful Server

made by [Malcom Kiano](https://github.com/malcolmkiano) and [Ian Drews](https://github.com/MediocreIan) 2020

# Api endpoints

#### /pets

GET: returns a list of all pets currently up for adoption. this will be one of each type of pet i.e. one dog one cat. the format will be as follows.

```JSON
{"dog": {
  "age": 3,
  "breed": "Golden Retriever",
  "description":"A smiling golden-brown golden retreiver listening to music.",
  "gender": "Male",
  "imageURL":
    "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "name": "Zim",
  "story": "Owner Passed away",
}}
```

DELETE: Removes the pet of the given type currently up for adoption. Rquest format is:

```JSON
{"type": "dogs"}
```

#### /pets/all

GET: returns all pets currently in the queue. The format is:

```JSON
{"petType": [{
  "age": 3,
  "breed": "Golden Retriever",
  "description":"A smiling golden-brown golden retreiver listening to music.",
  "gender": "Male",
  "imageURL":
    "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "name": "Zim",
  "story": "Owner Passed away",
}]}
```

#### /people

GET: returns all people currently in queue. The format is:

```
{"people":["Alanis Morisette","Sam Smith"]}
```

POST: adds new people to the end of the queue. Request format is:

```JSON
{"name": "Sam Smith"}
```

# Stack

made with express and NodeJs
