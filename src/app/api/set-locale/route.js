// app/api/set-locale/route.ts (or route.js)

import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request) {
    if (request.method === 'POST') {
        const { searchParams } = new URL(request.url);
        const locale = searchParams.get('lang') || 'en';

        await cookies().set('NEXT_LOCALE', locale, { path: '/' });

        return NextResponse.json({ success: true, locale });

    }
}
