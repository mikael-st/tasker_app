import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ScaleService {
  private base: number = 1920;

  updateScale(): number {
    return window.innerWidth / this.base;
  }
}