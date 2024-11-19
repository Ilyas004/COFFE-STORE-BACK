import { Controller } from '@nestjs/common';
import { TeaService } from './tea.service';

@Controller('tea')
export class TeaController {
  constructor(private readonly teaService: TeaService) {}
}
