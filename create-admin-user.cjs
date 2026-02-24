require('dotenv').config({ path: '.env.local' });
const { PrismaClient } = require('@prisma/client');

async function createAdminUser() {
  const prisma = new PrismaClient();
  
  try {
    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email: 'eric@serp.gg' }
    });
    
    if (!user) {
      console.log('❌ User eric@serp.gg not found. Please sign in with magic link first.');
      console.log('📧 Go to http://localhost:1545/login and use magic link to create your account');
      console.log('🔄 Then run this script again to make yourself an admin');
      return;
    }
    
    console.log('📧 Found user:', user.email, 'with role:', user.role);
    
    // Update to ADMIN role
    const updatedUser = await prisma.user.update({
      where: { email: 'eric@serp.gg' },
      data: { role: 'ADMIN' }
    });
    
    console.log('✅ Updated user role to ADMIN:', updatedUser.email, updatedUser.role);
    console.log('🎯 You can now access admin dashboard at: http://localhost:1545/admin-dashboard');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

createAdminUser();
