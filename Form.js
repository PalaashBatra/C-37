class Form{
    constructor(){
        this.title = createElement("h2")
        this.input = createInput("name")
        this.greeting = createElement("h3")
        this.button = createButton("play")
    }
    hide(){
        this.input.hide()
        this.greeeting.hide()
        this.button.hide()
    }
    display(){
        
        this.title.html("carracinggame")
        this.title.position(130,0)
        this.input.position(130,160)
        this.button.position(250,200)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount+=1
            player.index = playerCount
            player.update()
            player.updateCount(playerCount)
            
            this.greeting.html("hello" + player.name)
            this.greeting.position(130,160)
        })
    }
}