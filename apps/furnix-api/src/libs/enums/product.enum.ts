import { registerEnumType } from '@nestjs/graphql';
//** ProductType **//
export enum ProductType {
	CHAIR = 'CHAIR',
	TABLE = 'TABLE',
	SOFA = 'SOFA',
	BED = 'BED',
	CABINET = 'CABINET',
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
	EXTRA_LARGE = 'EXTRA_LARGE',
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
	NEW_YORK = 'NEW_YORK',
	LOS_ANGELES = 'LOS_ANGELES',
	CHICAGO = 'CHICAGO',
	HOUSTON = 'HOUSTON',
	MIAMI = 'MIAMI',
	DALLAS = 'DALLAS',
	ATLANTA = 'ATLANTA',
	DENVER = 'DENVER',
	SEATTLE = 'SEATTLE',
	SAN_FRANCISCO = 'SAN_FRANCISCO',
}
registerEnumType(ProductLocation, {
	name: 'ProductLocation',
});
