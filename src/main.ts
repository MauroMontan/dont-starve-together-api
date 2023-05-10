import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Config } from './config/config.provider';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const config = new DocumentBuilder()
		.setTitle('Dont starve together API')
		.setDescription('The dont starve together API')
		.setVersion('0.1')
		.addTag('Survivors')
		.addTag('Items')
		.addTag('Crockpot Recipes')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('docs', app, document);

	app.useGlobalPipes(new ValidationPipe());
	app.enableCors();
	await app.listen(Config.PORT);
}
bootstrap();
