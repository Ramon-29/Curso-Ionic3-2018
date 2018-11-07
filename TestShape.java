package modulo1.ejercicios05;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

public class TestShape {

    public static void main(String[] args) throws Exception {
        Shape s = new Circle(1., "Negro", true);
        Shape s2 = new Circle(1.1, "Azul", false);
        Shape s3 = new Square(1., "Rojo", true);
        /*
        List<Shape> lst = new ArrayList();
        lst.add(s);
        lst.add(s2);
        lst.add(s3);
        
        System.out.println(lst);
        Collections.sort(lst);
        System.out.println(lst);
        
        TreeSet<Shape> test = new TreeSet<Shape>(lst);
        System.out.println(test);*/

 /*File fileOut = new File("ficheros/copiaShape.arff");
        FileOutputStream fout = null;

        FileOutputStream fileOutputStream = new FileOutputStream(fileOut);
        ObjectOutputStream objectOutputStream = null;
         */
 /*try {
            objectOutputStream = new ObjectOutputStream(fileOutputStream);
            System.out.println(s);
            objectOutputStream.writeObject(s);
            objectOutputStream.flush();
        } finally {
            if (objectOutputStream != null) {
                objectOutputStream.close();
            }
        }*/
        /*FileOutputStream fileOutputStream = new FileOutputStream("ficheros/copiaShape.txt");
        ObjectOutputStream objectOutputStream = new ObjectOutputStream(fileOutputStream);
        objectOutputStream.writeObject(s);
        objectOutputStream.flush();
        objectOutputStream.close();*/

        FileInputStream fileInputStream = new FileInputStream("ficheros/copiaShape.txt");
        ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);
        Shape sx = (Shape) objectInputStream.readObject();
        objectInputStream.close();

        File fileOut = new File("ficheros/copiaShape.arff");
        FileOutputStream fileOutputStream = new FileOutputStream(fileOut);
        System.out.println("Recuperado: " + sx);
    }
}
