import { prisma } from '../config/prisma.js'

async function main() {
    // Seed data for TestModel
    const testData = [
        { testField: 'Test Data 1' },
        { testField: 'Test Data 2' },
        { testField: 'Test Data 3' },
        { testField: 'Test Data 4' },
        { testField: 'Test Data 5' }
    ];

    // Insert the seed data into the TestModel table
    for (const data of testData) {
        await prisma.testModel.create({
            data: data
        });
    }

    console.log('Seeding completed.');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });