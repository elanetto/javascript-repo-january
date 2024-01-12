export let greetUser = "Welcome";
import { userName } from "./user.js";

export function greetNewUser() {
    console.log(greetUser,userName,"!");
}