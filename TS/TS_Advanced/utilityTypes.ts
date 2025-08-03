//Utility Types (Yardımcı Tipler)

//TR
//Bunlar, TypeScript’in sunduğu hazır tip manipülasyonlarıdır.
//Karmaşık interface'leri daha kolay yeniden şekillendirmemizi sağlarlar.

//EN
//These are the ready-made type manipulations offered by TypeScript.
//They allow us to reshape complex interfaces more easily.


interface MyUser {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}


//Partial<T> => Tüm alanları opsiyonel yapar
//Kullanım yeri: Form güncellemeleri, patch işlemleri

type UserUpdate = Partial<MyUser>;

const update: UserUpdate = {
  name: "Uğur", // diğer alanları yazmasan da olur
};




//Required<T> → Tüm alanları zorunlu yapar

type StrictUser = Required<MyUser>; // önce opsiyonel yaptık, sonra zorunluya çevirdik





//Readonly<T> → Alanlar değiştirilemez
//Özellikle sabit gelen veriler (örneğin API response'ları) için kullanılır.

type ReadOnlyUser = Readonly<MyUser>;

const myUsr: ReadOnlyUser = {
  id: 1,
  name: "Uğur",
  email: "u@x.com",
  isAdmin: true,
};

// u.name = "Yeni İsim";  Hata

//Sadece belirli iki özellik readonly olsun istiyorsak , şu şekilde yaparız
type ReadonlyFields<T, K extends keyof T> = {
  readonly [P in K]: T[P];
} & {
  [P in Exclude<keyof T, K>]: T[P];
};



type PartiallyReadonlyUser = ReadonlyFields<MyUser, "id" | "email">;

const user: PartiallyReadonlyUser = {
  id: 1,
  name: "Uğur",
  email: "ugur@example.com",
  isAdmin: false,
};

user.name = "Yeni İsim";        //  Değiştirilebilir
user.id = 99;                   //  HATA: readonly
user.email = "x@example.com";   //  HATA: readonly




//Pick<T, Keys> → Sadece belirli alanları alır
//Kullanım yeri: Listeleme ekranları (detay gerekmez)

type UserPreview = Pick<MyUser, "id" | "name">;

const preview: UserPreview = {
  id: 1,
  name: "Uğur",
};



// Omit<T, Keys> → Belirli alanları hariç tutar
//Kullanım yeri: Gizli bilgileri frontend'de göstermemek

type PublicUser = Omit<MyUser, "email" | "isAdmin">;

const guest: PublicUser = {
  id: 2,
  name: "Ziyaretçi",
};




// Record<K, T> → Anahtar/değer map'leri için
//Kullanım yeri: Rol tabanlı yetkilendirme, config nesneleri

type MyRole = "admin" | "user" | "guest";

type MyPermissions = Record<MyRole, string[]>;

const perms: MyPermissions = {
  admin: ["read", "write", "delete"],
  user: ["read"],
  guest: [],
};





// Exclude<T, U> → T’den U’yu çıkar

type Roles = "admin" | "user" | "guest";
type SafeRoles = Exclude<Roles, "admin">;
// "user" | "guest"



//Extract<T, U> → T içinden sadece U olanları al

type UserOrGuest = Extract<Roles, "user" | "guest">; // "user" | "guest"
