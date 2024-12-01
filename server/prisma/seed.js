import { prisma } from '../config/prisma.js'

async function main() {
    // ScheduleTime
    // Add schedule time slots every 30 minutes.
    const baseTime = new Date();
    baseTime.setHours(0);
    baseTime.setMinutes(0);
    baseTime.setSeconds(0);

    const startTime = new Date();
    startTime.setTime(baseTime.getTime());

    const endTime = new Date();
    endTime.setTime(baseTime.getTime() + 30 * 60 * 1000);

    for (let ctr = 0; ctr < 48; ctr++) {
        await prisma.scheduleTime.create({
            data: {
                startTime,
                endTime
            }
        });

        startTime.setTime(endTime.getTime());
        endTime.setTime(startTime.getTime() + 30 * 60 * 1000);
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
