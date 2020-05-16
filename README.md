# Petful Server

</br>
made by Malcom Kiano and Ian Drews 2020
</br>
# Api endpoints
</br>
<h3>Api Endpoints</h3></br></br>

<h4>/pets<h4> </br>
GET: returns a list of all pets currently up for adoption. this will be one of each type of pet i.e. one dog one cat. the format will be as follows.</br>
            <code>dog: {
              age: 3,
              breed: "Golden Retriever",
              description:
                "A smiling golden-brown golden retreiver listening to music.",
              gender: "Male",
              imageURL:
                "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              name: "Zim",
              story: "Owner Passed away",
            }</code></br></br>
DELETE: Removes the pet of the given type currently up for adoption. Rquest format is: </br><code>{type: "dogs"}</code>
</br></br>
<h4>/pets/all</h4>
GET: returns all current pets currently in the queue. The format is: </br>
<code>{petType: [{petobject}, {petobject2}], petType2: [{petObject3}, {petobject4}]}</code>
</br>
<h4>/people<h4> </br>
GET: returns all people currently in queue. The format is:</br>
<code>{"people":["Alanis Morisette","Sam Smith"]}</code></br>
</br>
POST: adds new people to the end of the queue. Request format is: </br>
<code>{name: "Sam Smith"}</code>
