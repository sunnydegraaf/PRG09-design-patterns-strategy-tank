import { Tank }         from "../tank.js";
import { Vector } from "../vector.js";
import { Projectile }   from "./projectile.js";


export class Missile extends Projectile {
    constructor(tank : Tank) {
        super("missile", tank)
        this.fireRate = 2000
    }

    public update(): void {
        super.update();
        this.rotation++
    }
}