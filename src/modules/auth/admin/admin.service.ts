import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminService {
  login(createAdminDto: CreateAdminDto) {
    return 'This action adds a new admin';
  }
  logout() {
    return 'This action adds a new admin';
  }
}
