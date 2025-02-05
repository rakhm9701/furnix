import { registerEnumType } from '@nestjs/graphql';
//** ProductType **//
export enum ProductType {
	WOOD = 'WOOD',
	METAL = 'METAL',
	GLASS = 'GLASS',
	PLASTIC = 'PLASTIC',
	LEATHER = 'LEATHER',
	FABRIC = 'FABRIC',
}
registerEnumType(ProductType, {
	name: 'ProductType',
});

//** ProductStatus **//
export enum ProductStatus {
	ACTIVE = 'ACTIVE',
	SOLD = 'SOLD',
	DELIVERED = 'DELIVERED',
	CANCELED = 'CANCELED',
	RETURNED = 'RETURNED',
	DELETE = 'DELETE',
}
registerEnumType(ProductStatus, {
	name: 'ProductStatus',
});

//** PaymentMethod **//
export enum PaymentMethod {
	CASH = 'CASH',
	CREDIT_CARD = 'CREDIT CARD',
	PAYPAL = 'PAYPAL',
	BANK_TRANSFER = 'BANK TRANSFER',
}
registerEnumType(PaymentMethod, {
	name: 'PaymentMethod',
});

//** ProductSize **//
export enum ProductSize {
	SMALL = 'SMALL',
	MEDIUM = 'MEDIUM',
	LARGE = 'LARGE',
	EXTRA_LARGE = 'EXTRA LARGE',
}
registerEnumType(ProductSize, {
	name: 'ProductSize',
});

//** ProductColor **//
export enum ProductColor {
	WHITE = 'WHITE',
	BLACK = 'BLACK',
	BROWN = 'BROWN',
	GREY = 'GREY',
	BLUE = 'BLUE',
	RED = 'RED',
	GREEN = 'GREEN',
}
registerEnumType(ProductColor, {
	name: 'ProductColor',
});


//** ProductLocation **//
export enum ProductLocation {
	WAREHOUSE = 'WAREHOUSE',
	SHOWROOM = 'SHOWROOM',
	ONLINE = 'ONLINE',
	BRANCH_SEOUL = 'BRANCH SEOUL',
	BRANCH_BUSAN = 'BRANCH BUSAN',
	BRANCH_DAEJON = 'BRANCH DAEJON'
}
registerEnumType(ProductLocation, {
	name: 'ProductLocation',
});
