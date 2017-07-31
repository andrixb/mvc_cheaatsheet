# IMPLEMENT MVC PATTERN IN JS

Model-View-Controller pattern is a _compound pattern_ that connects three entities together (**Model**, **View**, **Controller**).

Is made up (at least. i.e. It may also use _Factory_ and _Template_) of two _behavioral_ patterns and a _structural_ one:

- Observer Pattern (for the Model) - _Behavioral Pattern_
- Composite Pattern (for the View) - _Structural Pattern_
- Strategy Pattern (for the Controller) - _Behavioral Pattern_

### OBSERVER PATTERN

Core communication in MVC is based on this pattern.

Very common in JavaScript as it is used for event-driven coding and offers loose coupling between components.

The _Observer pattern_ offers a model in which objects/components subscribes to an event and get notified when the event occurs.
The relation is **One-To-Many**.

There is a more specific variation of the _Observer pattern_ that is more event driven related and it is known as _Publisher/Subscriber_.

#### Methods implemented

##### Class `Observer`
- `subscribeObserver()`
- `unsubscribeObserver()`
- `notifyObservers()`

### COMPOSITE PATTERN

### STRATEGY PATTERN

## MVC WORKFLOW AND LOGIC

1) The user interacts with the **View**

2) The **Controller** asks the **Model** to change its state

3) The **Controller** could ask the **View** to change (in case of feedback on user interaction)

4) The **Model** tells the **View** when its state has changed

5) The **View** asks the **Model** for state (data)

According with this workflow the View and Model have a loose coupling  whereas the Controller is the one in charge of understanding what kind of event the user has generated and calls the right Model method (the Model it may be also connected with the DB).

### MODEL

Model represent the data and all the business logic of the application.

### VIEW

### CONTROLLER
