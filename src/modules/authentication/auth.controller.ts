import { Controller, Post, Res, Req, Get } from '@nestjs/common';

@Controller('authenticate')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Get('token')
    async createToken(): Promise<any> {
        return await this.authService.createToken()
    }

    // @Post()
    // async authenticateUser(@Req() req, @Res() res) {
    //     console.log('hey')
    //     return 'req received';
    // }

}