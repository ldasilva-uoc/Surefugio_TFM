import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenService } from "src/app/user/service/token.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private tokenService: TokenService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const accessToken = this.tokenService.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + accessToken
            }
        });
        return next.handle(req);
    }
}