
//enum (Sabit Değer Grupları)

//Enum nerelerde kullanılır?
//Kullanıcı rollerinde
enum UserRole { Admin, Moderator, Guest }

//HTTP durum kodlarında
enum HttpStatus { OK = 200, NotFound = 404 }

//Sipariş durumlarında
enum OrderStatus { Pending, Shipped, Delivered, Cancelled }


enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;
let anotherMove :Direction =Direction.Left;

console.log(move); // 0
console.log(anotherMove); //2




//Customization

enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

const response = Status.Success; // 200



enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

const currentUserRole: Role = Role.User;

console.log(currentUserRole); // USER




enum TrafficLight {
  Red,
  Yellow,
  Green,
}

function getAction(light: TrafficLight): string {
  switch (light) {
    case TrafficLight.Red:
      return "Stop";
    case TrafficLight.Yellow:
      return "Caution";
    case TrafficLight.Green:
      return "Go";
  }
}

console.log(getAction(TrafficLight.Green)); // Go



const enum Size {
  Small = "S",
  Medium = "M",
  Large = "L",
}

const selected = Size.Medium;



