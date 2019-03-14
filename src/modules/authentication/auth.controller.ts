import { Controller, Post, Res, Req, Get } from '@nestjs/common';

@Controller('authenticate')
export class AuthController {

    constructor(
        // inject server here
    ) { }

    @Get()
    test() {
        return 'response';
    }

    @Post()
    async authenticateUser(@Req() req, @Res() res) {
        console.log('hey')
        return 'req received';
    }

}