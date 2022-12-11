import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        {/* <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section> */}

        <section className='mb-4'>
          <p>
           Welcome to the TREFLO pizzaHunt when you feel hungry just open the site and please an orders. Your pizza will be on the way
          </p>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                  <strong>Mail us bulk Orders</strong>
            
              </MDBCol>
              <strong>treflo@pizzahunt.com</strong>
              <MDBCol md='5' start='12'>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

       

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>bangalore</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Koramnagal
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Coorge
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Marthanhalli
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                        Electornic City
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Hyderabad</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    bangaraHills
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Malakpet
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Khairathabad
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    HighTech City
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Vijaywada</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    BhavaniPuram
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Benz Circle
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    SN Puram
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Gandhi Nagar
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Comany</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    careers
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Policies
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Legal
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          PizzaHunt.com
        </a>
      </div>
    </MDBFooter>
  );
}